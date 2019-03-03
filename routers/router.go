package routers

import (
	"github.com/Penun/swutil_ang/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
	beego.Router("/species", &controllers.SpeciesController{})
}
