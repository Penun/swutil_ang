package controllers

import (
	"github.com/Penun/swutil/models"
	"github.com/astaxie/beego"
	 "encoding/json"
	//"fmt"
)

type CareersController struct {
	beego.Controller
}

func (this *CareersController) Get() {
	var t_cars []models.Career
    t_cars = models.GetCareers()
    this.Data["json"] = t_cars
    this.ServeJSON()
}

func (this *CareersController) Specializations() {
	var specreq ByIdRequest
	err := json.Unmarshal(this.Ctx.Input.RequestBody, &specreq)
	if err == nil {
        cSpecs := models.GetSpecialByCareer(int64(specreq.Id))
		if cSLen := len(cSpecs); cSLen > 0 {
			resSpec := make([]models.Specialization, cSLen)
			for i := 0; i < cSLen; i++ {
				resSpec[i] = *cSpecs[i].Specialization
			}
            this.Data["json"] = resSpec
            this.ServeJSON()
		}
	} else {
		beego.Error(err)
	}
}

func (this *CareersController) Skills() {
	var skillreq ByIdRequest
	err := json.Unmarshal(this.Ctx.Input.RequestBody, &skillreq)
	if err == nil {
		cSkills := models.GetSkillsByCareer(int64(skillreq.Id))
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
