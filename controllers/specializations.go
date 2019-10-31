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
		resTales := make([]models.Talent, 0)
		if taLen := len(tales); taLen > 0 {
			resTales = make([]models.Talent, taLen)
			for i := 0; i < taLen; i++ {
				resTales[i] = *tales[i].Talent
			}
		}
		this.Data["json"] = resTales
		this.ServeJSON()
	} else {
		beego.Error(err)
	}
}
