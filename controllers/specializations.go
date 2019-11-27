package controllers

import (
	"github.com/Penun/swutil/models"
	"github.com/astaxie/beego"
	 "encoding/json"
	//"fmt"
)

type SpecializationsController struct {
	beego.Controller
}

type SpecTale struct {
	Id int64 `json:"id"`
    Name string `json:"name"`
    Type string `json:"type"`
    Ranked bool `json:"ranked"`
    Description string `json:"description"`
	Right bool `json:"right"`
	Down bool `json:"down"`
}

func (this *SpecializationsController) Skills() {
	var skillreq ByIdRequest
	err := json.Unmarshal(this.Ctx.Input.RequestBody, &skillreq)
	if err == nil {
		cSkills := models.GetSkillsBySpecial(int64(skillreq.Id))
		resSkills := make([]models.Skill, 0)
		if csLen := len(cSkills); csLen > 0 {
			resSkills = make([]models.Skill, csLen)
			for i := 0; i < csLen; i++ {
				resSkills[i] = *cSkills[i].Skill
			}
		}
		this.Data["json"] = resSkills
		this.ServeJSON()
	} else {
		beego.Error(err)
	}
}

func (this *SpecializationsController) Talents() {
	var taleReq ByIdRequest
	err := json.Unmarshal(this.Ctx.Input.RequestBody, &taleReq)
	if err == nil {
		tales := models.GetTalentsBySpecial(int64(taleReq.Id))
		resTales := make([]SpecTale, 0)
		if taLen := len(tales); taLen > 0 {
			resTales = make([]SpecTale, taLen)
			for i := 0; i < taLen; i++ {
				resTales[i].Id = tales[i].Talent.Id
				resTales[i].Name = tales[i].Talent.Name
				resTales[i].Type = tales[i].Talent.Type
				resTales[i].Ranked = tales[i].Talent.Ranked
				resTales[i].Description = tales[i].Talent.Description
				resTales[i].Right = tales[i].Right
				resTales[i].Down = tales[i].Down
			}
		}
		this.Data["json"] = resTales
		this.ServeJSON()
	} else {
		beego.Error(err)
	}
}
