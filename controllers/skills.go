package controllers

import (
	"github.com/Penun/swutil/models"
	"github.com/astaxie/beego"
)

type SkillsController struct {
	beego.Controller
}

func (this *SkillsController) Get() {
	var t_skills []models.Skill
    t_skills = models.GetSkills()
    this.Data["json"] = t_skills
    this.ServeJSON()
}
