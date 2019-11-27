package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Species() {
	this.Redirect("/", 302)
}

func (this *MainController) Get() {
	this.TplName = "index.tpl"
}
