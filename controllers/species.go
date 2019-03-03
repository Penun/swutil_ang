package controllers

import (
	"github.com/Penun/swutil/models"
	"github.com/astaxie/beego"
	"encoding/json"
	//"fmt"
)

type SpeciesController struct {
	beego.Controller
}

type ByIdRequest struct {
	Id int `json:"id"`
}

type AttributeResp struct {
	Index int `json:"index"`
	Result []models.SpeAttribute `json:"result"`
}

type InsSpeReq struct {
	Species models.Species `json:"species"`
	Attributes []models.SpeAttribute `json:"attributes"`
}

type InsSpeResp struct{
	Species models.Species `json:"species"`
	Attributes []models.SpeAttribute `json:"attributes"`
}

func (this *SpeciesController) Get() {
	var t_spec []models.Species
    t_spec = models.GetSpecies()
    this.Data["json"] = t_spec
    this.ServeJSON()
}

func (this *SpeciesController) Attributes() {
	var attreq ByIdRequest
	var t_spAtt []models.SpeAttribute
	err := json.Unmarshal(this.Ctx.Input.RequestBody, &attreq)
	if err == nil {
		t_spAtt = models.GetSpecAtt(int64(attreq.Id))
	} else {
		beego.Error(err)
	}
	this.Data["json"] = t_spAtt
	this.ServeJSON()
}
//
// func (this *SpeciesController) Add() {
// 	var insReq InsSpeReq
// 	err := json.Unmarshal(this.Ctx.Input.RequestBody, &insReq)
// 	resp := InsSpeResp{Occ: BaseResp{Success: false, Error: ""}}
// 	if err == nil {
// 		sp_id := models.AddSpecies(insReq.Species)
// 		insReq.Species.Id = sp_id
// 		resp.Species = insReq.Species
// 		for i := 0; i < len(insReq.Attributes); i++ {
// 			t_att := models.SpeAttribute{Species: &insReq.Species, Description: insReq.Attributes[i].Description}
// 			att_id := models.AddSpeAttribute(t_att)
// 			insReq.Attributes[i].Id = att_id
// 		}
// 		resp.Attributes = insReq.Attributes
// 		resp.Occ.Success = true
// 	} else {
// 		fmt.Println(err)
// 		resp.Occ.Error = "Failed Parse."
// 	}
// 	this.Data["json"] = resp
// 	this.ServeJSON()
// }
