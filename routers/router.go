package routers

import (
	"github.com/Penun/swutil_ang/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
	beego.Router("/species", &controllers.MainController{}, "get:Species")
	beego.Router("/species/?:id", &controllers.MainController{}, "get:Species")
	beego.Router("/species/list", &controllers.SpeciesController{})
	beego.Router("/species", &controllers.SpeciesController{}, "post:SpeciesId")
	beego.Router("/species/?:id", &controllers.SpeciesController{}, "post:SpeciesId")
	beego.Router("/species/attributes", &controllers.SpeciesController{}, "post:Attributes")
	beego.Router("/careers", &controllers.CareersController{}, "*:Reroute")
	beego.Router("/careers/**", &controllers.CareersController{}, "*:Reroute")
	beego.Router("/careers/list", &controllers.CareersController{})
	beego.Router("/careers/specializations", &controllers.CareersController{}, "post:Specializations")
	beego.Router("/careers/skills", &controllers.CareersController{}, "post:Skills")
	beego.Router("/specializations/talents", &controllers.SpecializationsController{}, "post:Talents")
	beego.Router("/specializations/skills", &controllers.SpecializationsController{}, "post:Skills")
	beego.Router("/skills", &controllers.SkillsController{})
}
