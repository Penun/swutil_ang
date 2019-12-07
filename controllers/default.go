package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Species() {
	this.TplName = "index.tpl"
}

func (this *MainController) Get() {
	this.Redirect("/species", 302)
}
