package controllers

import (
    "github.com/Penun/swutil/models"
	"github.com/astaxie/beego"
    "encoding/json"
    "math/rand"
)

type MarketController struct {
	beego.Controller
}

type MarketRequest struct {
    PlanetMod int `json:"planet_mod"`
    Restricted bool `json:"restricted"`
}

type MarketList struct {
    MeleeMarket []WeapModel `json:"melee_market"`
    RangedMarket []WeapModel `json:"ranged_market"`
    ArmorMarket []ArmModel `json:"armor_market"`
    GearMarket []GearMod `json:"gear_market"`
    AttachmentMarket []AttModel `json:"attachment_market"`
}

type WeapModel struct {
    Model string `json:"model"`
    Weapon models.Weapon `json:"weapon"`
}

type ArmModel struct {
    Model string `json:"model"`
    Armor models.Armor `json:"armor"`
}

type GearMod struct {
    Model string `json:"model"`
    Gear models.Gear `json:"gear"`
}

type AttModel struct {
    Model string `json:"model"`
    Attachment models.Attachment `json:"attachment"`
    ModificationOptions []models.ModificationOption `json:"modification_options"`
}

func (this *MarketController) Get() {
    this.TplName = "index.tpl"
}

func (this *MarketController) MeleeMarket() {
    var marketReq MarketRequest
    err := json.Unmarshal(this.Ctx.Input.RequestBody, &marketReq)
    if err != nil {
        beego.Error(err)
        marketReq = MarketRequest{PlanetMod: 5, Restricted: false}
    }
    baseMod := 5
    poolAvg := 4;
    countMod := 2;

    this.Data["json"] = GetWeapons("Melee", marketReq.Restricted, baseMod, marketReq.PlanetMod, poolAvg, countMod)
    this.ServeJSON()
}

func (this *MarketController) RangedMarket() {
    var marketReq MarketRequest
    err := json.Unmarshal(this.Ctx.Input.RequestBody, &marketReq)
    if err != nil {
        beego.Error(err)
        marketReq = MarketRequest{PlanetMod: 5, Restricted: false}
    }
    baseMod := 5
    poolAvg := 4;
    countMod := 3;

    this.Data["json"] = GetWeapons("Ranged", marketReq.Restricted, baseMod, marketReq.PlanetMod, poolAvg, countMod)
    this.ServeJSON()
}

func (this *MarketController) ArmorMarket() {
    var marketReq MarketRequest
    err := json.Unmarshal(this.Ctx.Input.RequestBody, &marketReq)
    if err != nil {
        beego.Error(err)
        marketReq = MarketRequest{PlanetMod: 5, Restricted: false}
    }
    baseMod := 5
    poolAvg := 4;
    countMod := 1;

    this.Data["json"] = GetArmor(marketReq.Restricted, baseMod, marketReq.PlanetMod, poolAvg, countMod)
    this.ServeJSON()
}

func (this *MarketController) GearMarket() {
    var marketReq MarketRequest
    err := json.Unmarshal(this.Ctx.Input.RequestBody, &marketReq)
    if err != nil {
        beego.Error(err)
        marketReq = MarketRequest{PlanetMod: 5, Restricted: false}
    }
    baseMod := 5
    poolAvg := 4;
    countMod := 1;

    this.Data["json"] = GetGear(marketReq.Restricted, baseMod, marketReq.PlanetMod, poolAvg, countMod)
    this.ServeJSON()
}

func (this *MarketController) AttachmentMarket() {
    var marketReq MarketRequest
    err := json.Unmarshal(this.Ctx.Input.RequestBody, &marketReq)
    if err != nil {
        beego.Error(err)
        marketReq = MarketRequest{PlanetMod: 5, Restricted: false}
    }
    baseMod := 5
    poolAvg := 4;
    countMod := 4;

    this.Data["json"] = GetAttachments(marketReq.Restricted, baseMod, marketReq.PlanetMod, poolAvg, countMod)
    this.ServeJSON()
}

func GetWeapons(weapType string, restricted bool, baseMod, planetMod, poolAvg, countMod int) []WeapModel {
    weapList := models.GetWeaponsByType(weapType, restricted)
    if len(weapList) <= 0 {
        return []WeapModel{};
    }

    retList := make([]WeapModel, 0)
    priceMod := 1

    if planetMod < -1 {
        priceMod = -planetMod
    }

    for i := 0; i < len(weapList); i++ {
        if weapList[i].Rarity - planetMod <= 0 {
            addWeapon := WeapModel{Model: "", Weapon: weapList[i]}
            addWeapon.Model = GetWeaponModel(weapList[i].Id)
            addWeapon.Weapon.Price *= priceMod
            retList = append(retList, addWeapon)
            weapList = append(weapList[:i], weapList[i + 1:]...)
            if len(weapList) <= 0 {
                return retList
            }
            i--
        }
    }

    if len(weapList) <= 0 {
        return []WeapModel{};
    }

    curPool := 0;
    poolTot := baseMod * poolAvg * countMod
    tryFCount := float32((baseMod * countMod) + (planetMod * countMod))
    tryCount := int(tryFCount)

    for i := 0; i < tryCount; i++ {
        randItem := rand.Intn(len(weapList))
        addWeapon := WeapModel{Model: "", Weapon: weapList[randItem]}

        if curPool + addWeapon.Weapon.Rarity - planetMod <= poolTot {
            drop := 1 + (float32(poolAvg) * .1) - (float32(addWeapon.Weapon.Rarity - planetMod) * .1) + rand.Float32()
            if  drop > 1 {
                addWeapon.Model = GetWeaponModel(weapList[randItem].Id)
                addWeapon.Weapon.Price *= priceMod
                retList = append(retList, addWeapon)
                curPool += addWeapon.Weapon.Rarity - planetMod
                weapList = append(weapList[:randItem], weapList[randItem + 1:]...)
                if len(weapList) <= 0 {
                    return retList
                }
            }
        } else {
            deadEnd := true
            if invPool := poolTot - curPool; invPool > 0 {
                for j := 0; j < len(weapList); j++ {
                    if (weapList[j].Rarity - planetMod <= invPool){
                        deadEnd = false
                        break
                    }
                }
            }
            if deadEnd {
                return retList
            }
        }
    }
    return retList
}

func GetWeaponModel(weap int64) string {
    weapMods := models.GetWeaponModels(weap)
    modLen := len(weapMods)
    if modLen == 1 {
        return weapMods[0].Model
    } else if modLen > 1 {
        randInd := rand.Intn(len(weapMods))
        return weapMods[randInd].Model
    }
    return ""
}

func GetArmor(restricted bool, baseMod, planetMod, poolAvg, countMod int) []ArmModel {
    armList := models.GetArmorRestricted(restricted)
    if len(armList) <= 0 {
        return []ArmModel{}
    }

    retList := make([]ArmModel, 0)
    priceMod := 1

    if planetMod < -1 {
        priceMod = -planetMod
    }

    for i := 0; i < len(armList); i++ {
        if armList[i].Rarity - planetMod <= 0 {
            addArmor := ArmModel{Model: "", Armor: armList[i]}
            addArmor.Armor.Price *= priceMod
            addArmor.Model = GetArmorModel(armList[i].Id)
            retList = append(retList, addArmor)
            armList = append(armList[:i], armList[i + 1:]...)
            if len(armList) <= 0 {
                return retList
            }
            i--
        }
    }

    if len(armList) <= 0 {
        return []ArmModel{}
    }

    curPool := 0;
    poolTot := baseMod * poolAvg * countMod
    tryFCount := float32((baseMod * countMod) + (planetMod * countMod))
    tryCount := int(tryFCount)

    for i := 0; i < tryCount; i++ {
        randItem := rand.Intn(len(armList))
        addArmor := ArmModel{Model: "", Armor: armList[randItem]}
        if curPool + addArmor.Armor.Rarity - planetMod <= poolTot {
            drop := 1 + (float32(poolAvg) * .1) - (float32(addArmor.Armor.Rarity - planetMod) * .1) + rand.Float32()
            if  drop > 1 {
                addArmor.Model = GetArmorModel(armList[randItem].Id)
                addArmor.Armor.Price *= priceMod
                retList = append(retList, addArmor)
                curPool += addArmor.Armor.Rarity - planetMod
                armList = append(armList[:randItem], armList[randItem + 1:]...)
                if len(armList) <= 0 {
                    return retList
                }
            }
        } else {
            invPool := poolTot - curPool
            deadEnd := true
            for j := 0; j < len(armList); j++ {
                if (armList[j].Rarity - planetMod <= invPool){
                    deadEnd = false
                    break
                }
            }
            if deadEnd {
                return retList
            }
        }
    }
    return retList
}

func GetArmorModel(armor int64) string {
    armMods := models.GetArmorModels(armor)
    modLen := len(armMods)
    if modLen == 1 {
        return armMods[0].Model
    } else if modLen > 1 {
        randInd := rand.Intn(len(armMods))
        return armMods[randInd].Model
    }
    return ""
}

func GetGear(restricted bool, baseMod, planetMod, poolAvg, countMod int) []GearMod {
    retList := make([]GearMod, 0)

    if commsBase := baseMod - 2; commsBase > 0 {
        retList = GetGearList(retList, models.GetGearByType("Communications Equipment", restricted), restricted, restricted, commsBase, planetMod, poolAvg, countMod)
    } else {
        retList = GetGearList(retList, models.GetGearByType("Communications Equipment", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)
    }
    var drugsBase int
    if !restricted {
        drugsBase = baseMod - 1
    } else {
        drugsBase = baseMod * 2
    }
    if drugsBase > 0 {
        retList = GetGearList(retList, models.GetGearByType("Poisons and Drugs", restricted), restricted, false, drugsBase, planetMod, poolAvg, countMod)
    } else {
        retList = GetGearList(retList, models.GetGearByType("Poisons and Drugs", restricted), restricted, false, baseMod, planetMod, poolAvg, countMod)
    }

    retList = GetGearList(retList, models.GetGearByType("Scanning and Surveillance Equipment (Detection Devices)", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)
    medBase := baseMod + 2
    retList = GetGearList(retList, models.GetGearByType("Medical Equipment", restricted), restricted, false, medBase, planetMod, poolAvg, countMod)
    if planetMod >= 0 {
        retList = GetGearList(retList, models.GetGearByType("Cybernetic Enhancements and Replacements", restricted), restricted, true, (baseMod + planetMod), planetMod, 10, countMod)
    }
    retList = GetGearList(retList, models.GetGearByType("Recreational Entertainment", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)
    retList = GetGearList(retList, models.GetGearByType("Infiltration and Espionage Equipment (Security)", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)
    retList = GetGearList(retList, models.GetGearByType("Survival Gear", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)
    retList = GetGearList(retList, models.GetGearByType("Tools and Electronics", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod + 1)
    retList = GetGearList(retList, models.GetGearByType("Load Bearing, Carrying, and Storage Equipment", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)
    retList = GetGearList(retList, models.GetGearByType("Slicing Tools", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)
    retList = GetGearList(retList, models.GetGearByType("Construction and Salvage Tools", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)
    retList = GetGearList(retList, models.GetGearByType("Remotes", restricted), restricted, restricted, baseMod, planetMod, poolAvg, countMod)

    return retList
}

func GetGearList(retList []GearMod, gearList []models.Gear, restricted, thinList bool, baseMod, planetMod, poolAvg, countMod int) []GearMod{
    if len(gearList) <= 0 {
        return retList
    }

    priceMod := 1

    if planetMod < -1 {
        priceMod = -planetMod
    }

    for i := 0; i < len(gearList); i++ {
        if gearList[i].Rarity - planetMod <= 0 {
            addGear := GearMod{Model: "", Gear: gearList[i]}
            addGear.Gear.Price *= priceMod
            addGear.Model = GetGearModel(gearList[i].Id)
            retList = append(retList, addGear)
            gearList = append(gearList[:i], gearList[i + 1:]...)
            if len(gearList) <= 0 {
                return retList
            }
            i--
        }
    }

    if len(gearList) <= 0 {
        return retList
    }

    curPool := 0;
    poolTot := baseMod * poolAvg * countMod
    tryFCount := float32((baseMod * countMod) + (planetMod * countMod))
    tryCount := int(tryFCount)

    for i := 0; i < tryCount; i++ {
        randItem := rand.Intn(len(gearList))
        addGear := GearMod{Model: "", Gear: gearList[randItem]}
        if curPool + addGear.Gear.Rarity - planetMod <= poolTot {
            drop := 1 + (float32(poolAvg) * .1) - (float32(addGear.Gear.Rarity - planetMod) * .1) + rand.Float32()
            if  drop > 1 {
                addGear.Gear.Price *= priceMod
                addGear.Model = GetGearModel(gearList[randItem].Id)
                retList = append(retList, addGear)
                curPool += addGear.Gear.Rarity - planetMod
                gearList = append(gearList[:randItem], gearList[randItem + 1:]...)
                if len(gearList) <= 0 {
                    return retList
                }
            }
        } else {
            invPool := poolTot - curPool
            deadEnd := true
            for j := 0; j < len(gearList); j++ {
                if (gearList[j].Rarity - planetMod <= invPool){
                    deadEnd = false
                    break
                }
            }
            if deadEnd {
                return retList
            }
        }
    }
    return retList
}

func GetGearModel(gear int64) string {
    gearMods := models.GetGearModels(gear)
    modLen := len(gearMods)
    if modLen == 1 {
        return gearMods[0].Model
    } else if modLen > 1 {
        randInd := rand.Intn(len(gearMods))
        return gearMods[randInd].Model
    }
    return ""
}

func GetAttachments(restricted bool, baseMod, planetMod, poolAvg, countMod int) []AttModel {
    attList := models.GetAttachmentRestricted(restricted)
    if len(attList) <= 0 {
        return []AttModel{}
    }

    retList := make([]AttModel, 0)
    priceMod := 1

    if planetMod < -1 {
        priceMod = -planetMod
    }

    for i := 0; i < len(attList); i++ {
        if attList[i].Rarity - planetMod <= 0 {
            addAttach := AttModel{Model: "", Attachment: attList[i]}
            addAttach.Attachment.Price *= priceMod
            addAttach.Model = GetAttachmentModel(addAttach.Attachment.Id)
            addAttach.ModificationOptions = models.GetAttachmentModificationOptions(addAttach.Attachment.Id)
            retList = append(retList, addAttach)
            attList = append(attList[:i], attList[i + 1:]...)
            if len(attList) <= 0 {
                return retList
            }
            i--
        }
    }

    if len(attList) <= 0 {
        return []AttModel{}
    }

    curPool := 0;
    poolTot := baseMod * poolAvg * countMod
    tryFCount := float32((baseMod * countMod) + (planetMod * countMod))
    tryCount := int(tryFCount)

    for i := 0; i < tryCount; i++ {
        randItem := rand.Intn(len(attList))
        addAttach := AttModel{Model: "", Attachment: attList[randItem]}
        if curPool + addAttach.Attachment.Rarity - planetMod <= poolTot {
            drop := 1 + (float32(poolAvg) * .1) - (float32(addAttach.Attachment.Rarity - planetMod) * .1) + rand.Float32()
            if  drop > 1 {
                addAttach.Attachment.Price *= priceMod
                addAttach.Model = GetAttachmentModel(addAttach.Attachment.Id)
                addAttach.ModificationOptions = models.GetAttachmentModificationOptions(addAttach.Attachment.Id)
                retList = append(retList, addAttach)
                curPool += addAttach.Attachment.Rarity - planetMod
                attList = append(attList[:randItem], attList[randItem + 1:]...)
                if len(attList) <= 0 {
                    return retList
                }
            }
        } else {
            invPool := poolTot - curPool
            deadEnd := true
            for j := 0; j < len(attList); j++ {
                if (attList[j].Rarity - planetMod <= invPool){
                    deadEnd = false
                    break
                }
            }
            if deadEnd {
                return retList
            }
        }
    }
    return retList
}

func GetAttachmentModel(attach int64) string {
    attachMods := models.GetAttachmentModels(attach)
    modLen := len(attachMods)
    if modLen == 1 {
        return attachMods[0].Model
    } else if modLen > 1 {
        randInd := rand.Intn(len(attachMods))
        return attachMods[randInd].Model
    }
    return ""
}
