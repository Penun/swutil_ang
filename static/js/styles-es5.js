(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
        /***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
          \*****************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = [[module.i, "body {\n    display: grid;\n    background-image: url(\"/static/img/starscape.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: round;\n\tcolor: #a4dde5;\n\tfont-family: 'Share Tech Mono', monospace;\n    perspective: 1000px;\n\t-moz-perspective: 1000px;\n\t-webkit-perspective: 1000px;\n    height: 100%;\n    margin: 0;\n}\n\n.sw_back {\n\tbackground-image: url(\"/static/img/sw_back.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.sw_back_s {\n\tbackground-image: url(\"/static/img/sw_back_s.png\");\n    background-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.page {\n\tz-index: 0;\n\tdisplay: grid;\n    grid-template-columns: 2vw auto 2vw;\n    grid-template-rows: 3vh auto;\n    height: 100vh;\n}\n\n.sixty_he{\n    grid-column: 2;\n    grid-row: 2;\n\theight: 94vh;\n}\n\nbutton {\n\tfloat: right;\n\tbackground-color: rgba(84, 123, 168, 0.35);\n\tcolor: #a4dde5;\n\tdisplay: inline-block;\n  \tpadding: 1vh 1vw;\n  \tfont-size: 1.5vmin;\n  \tcursor: pointer;\n  \ttext-align: center;\n  \ttext-decoration: none;\n\tborder-width: 0.4vh;\n\tborder-color: #c0eaf1;\n\tborder-style: double;\n\toutline: none;\n  \tborder-radius: 2vw;\n  \tbox-shadow: 0px 0px 10px 5px #729cc1;\n\tmargin-top: 5px;\n\tz-index: 450;\n}\n\nbutton:hover {\n    box-shadow: 0 0 0.5vh 0.5vw #547ba8;\n\tbackground-color: rgba(84, 123, 168, 0.65);\n}\n\nbutton:active {\n\tbackground-color: rgba(192, 234, 241, 0.5);\n    box-shadow: 0 0 0.5vh 0.5vw rgba(192, 234, 241, 0.75);\n\tcolor: #83d9e6;\n\ttransform: scale(0.9, 0.9);\n}\n\nul {\n\tlist-style: none;\n\twidth: 100%;\n\theight: auto;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\twidth: 100%;\n    position: relative;\n    display: inline-flex;\n}\n\n.clickable {\n\tbackground-image: url(\"/static/img/light_underline.png\");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\tbackground-size: 100% 10%;\n\tcursor: pointer;\n\ttext-align: center;\n\tfont-size: 2.5vmin;\n}\n\n.clickable:hover {\n\tbackground-image: url(\"/static/img/light_underline_high.png\");\n\tbackground-size: 100% 100%;\n\tcolor: #293c56;\n\tfont-weight: 200;\n}\n\n.right_col {\n\tfont-size: 2vmin;\n\toverflow-y: auto;\n    padding-left: 5vw;\n}\n\n.h2 {\n    font-size: 3vmin;\n}\n\n.alCenter {\n\tjustify-self: stretch;\n    align-self: center;\n    text-align: center;\n}\n\n/* Species */\n\n.th_head {\n\tbackground-image: url(\"/static/img/light_underline_high.png\");\n\tbackground-size: 100% 100%;\n\talign-self: stretch;\n}\n\n.th_name {\n\tfont-size: 1.75em;\n}\n\n.headerColor {\n\tcolor: #293c56;\n}\n\n.sw_back_op {\n\tbackground-image: url(\"/static/img/sw_back_op.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n/* End Species */\n\n.gridList {\n\tdisplay: grid;\n\tgrid-template-rows: 4vh auto 1fr;\n\tgrid-row-gap: 1vh;\n\theight: 95vh;\n\toverflow-y: auto;\n}\n\n.innerList {\n\tpadding-top: 1vh;\n\tdisplay: grid;\n\tgrid-auto-rows: -webkit-max-content;\n\tgrid-auto-rows: max-content;\n\tgrid-gap: 1vh;\n\toverflow-y: auto;\n}\n\n.doubPage {\n\tdisplay: grid;\n\tgrid-template-columns: 16% 1fr;\n\theight: 95vh;\n\tword-break: break-word;\n\tpadding-top: 2.5vh;\n}\n\n.menu_arrow {\n\tmax-height: 3vh;\n}\n\n.skillDiv {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-template-rows: auto;\n\talign-items: end;\n\tjustify-items: stretch;\n\tmargin-bottom: 3vh;\n}\n\n.skill {\n\ttext-align: center;\n\tbackground-image: url('/static/img/light_underline.png');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\tbackground-size: 95% 15%;\n}\n\n@keyframes fade_in {\n\t0% { opacity: 0; }\n\t100% { opacity: 1; }\n}\n\n@-webkit-keyframes fade_in {\n\t0% { opacity: 0; }\n\t100% { opacity: 1; }\n}\n\n@keyframes fade_out {\n\t0% {opacity: 1}\n\t100% {opacity: 0}\n}\n\n@-webkit-keyframes fade_out {\n\t0% {opacity: 1}\n\t100% {opacity: 0}\n}\n\n.fade_in {\n\tanimation-name: fade_in;\n\tanimation-duration: 750ms;\n\t-webkit-animation-name: fade_in;\n\t-webkit-animation-duration: 750ms;\n\t-moz-animation-name: fade_in;\n\t-moz-animation-duration: 750ms;\n}\n\n.fade_out {\n\tanimation-name: fade_out;\n\tanimation-duration: 350ms;\n\t-webkit-animation-name: fade_out;\n\t-webkit-animation-duration: 350ms;\n\t-moz-animation-name: fade_out;\n\t-moz-animation-duration: 350ms;\n\topacity: 0;\n}\n\n.fade_nu {\n\tdisplay: none;\n}\n\n.gridCol{grid-column: 1;}\n\n.gridCol2{grid-column: 2;}\n\n.gridCol3{grid-column: 3;}\n\n.gridCol4{grid-column: 4;}\n\n.gridCol5{grid-column: 5;}\n\n.gridCol6{grid-column: 6;}\n\n.gridCol7{grid-column: 7;}\n\n.gridCol8 {grid-column: 8;}\n\n.gridCol9 {grid-column: 9;}\n\n.gridCol10 {grid-column: 10;}\n\n.gridRow{grid-row: 1;}\n\n.gridRow2 {grid-row: 2}\n\n.gridRow3 {grid-row: 3}\n\n.gridRow4 {grid-row: 4}\n\n.gridRow5 {grid-row: 5}\n\n.gridRow6 {grid-row: 6}\n\n.gridRow7 {grid-row: 7}\n\n.gridRow8 {grid-row: 8}\n\n.gridRow9 {grid-row: 9}\n\n/*# sourceMappingURL=data:application/json;base64,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Qjs7QUFPQTtDQUNDLElBQUksVUFBVTtDQUNkLE1BQU0sVUFBVTtBQUNqQjs7QUFFQTtDQUNDLElBQUksVUFBVTtDQUNkLE1BQU0sVUFBVTtBQUNqQjs7QUFPQTtDQUNDLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIsK0JBQStCO0NBQy9CLGlDQUFpQztDQUNqQyw0QkFBNEI7Q0FDNUIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHlCQUF5QjtDQUN6QixnQ0FBZ0M7Q0FDaEMsaUNBQWlDO0NBQ2pDLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBLFNBQVMsY0FBYyxDQUFDOztBQUFDLFVBQVUsY0FBYyxDQUFDOztBQUFDLFVBQVUsY0FBYyxDQUFDOztBQUFDLFVBQVUsY0FBYyxDQUFDOztBQUFDLFVBQVUsY0FBYyxDQUFDOztBQUFDLFVBQVUsY0FBYyxDQUFDOztBQUFDLFVBQVUsY0FBYyxDQUFDOztBQUFDLFdBQVcsY0FBYyxDQUFDOztBQUFDLFdBQVcsY0FBYyxDQUFDOztBQUFDLFlBQVksZUFBZSxDQUFDOztBQUN2USxTQUFTLFdBQVcsQ0FBQzs7QUFBQyxXQUFXLFdBQVc7O0FBQUMsV0FBVyxXQUFXOztBQUFDLFdBQVcsV0FBVzs7QUFBQyxXQUFXLFdBQVc7O0FBQUMsV0FBVyxXQUFXOztBQUFDLFdBQVcsV0FBVzs7QUFBQyxXQUFXLFdBQVc7O0FBQUMsV0FBVyxXQUFXIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9zdGFyc2NhcGUucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuXHRjb2xvcjogI2E0ZGRlNTtcblx0Zm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcblx0LW1vei1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuXHQtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnN3X2JhY2sge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9zd19iYWNrLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5zd19iYWNrX3Mge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9zd19iYWNrX3MucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucGFnZSB7XG5cdHotaW5kZXg6IDA7XG5cdGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAydncgYXV0byAydnc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzdmggYXV0bztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2l4dHlfaGV7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgZ3JpZC1yb3c6IDI7XG5cdGhlaWdodDogOTR2aDtcbn1cblxuYnV0dG9uIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxMjMsIDE2OCwgMC4zNSk7XG5cdGNvbG9yOiAjYTRkZGU1O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIFx0cGFkZGluZzogMXZoIDF2dztcbiAgXHRmb250LXNpemU6IDEuNXZtaW47XG4gIFx0Y3Vyc29yOiBwb2ludGVyO1xuICBcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGJvcmRlci13aWR0aDogMC40dmg7XG5cdGJvcmRlci1jb2xvcjogI2MwZWFmMTtcblx0Ym9yZGVyLXN0eWxlOiBkb3VibGU7XG5cdG91dGxpbmU6IG5vbmU7XG4gIFx0Ym9yZGVyLXJhZGl1czogMnZ3O1xuICBcdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggIzcyOWNjMTtcblx0bWFyZ2luLXRvcDogNXB4O1xuXHR6LWluZGV4OiA0NTA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXZoIDAuNXZ3ICM1NDdiYTg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoODQsIDEyMywgMTY4LCAwLjY1KTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAyMzQsIDI0MSwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41dmggMC41dncgcmdiYSgxOTIsIDIzNCwgMjQxLCAwLjc1KTtcblx0Y29sb3I6ICM4M2Q5ZTY7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xufVxuXG51bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cblxubGkge1xuXHR3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5jbGlja2FibGUge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9saWdodF91bmRlcmxpbmUucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAyLjV2bWluO1xufVxuXG4uY2xpY2thYmxlOmhvdmVyIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvbGlnaHRfdW5kZXJsaW5lX2hpZ2gucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0Y29sb3I6ICMyOTNjNTY7XG5cdGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5yaWdodF9jb2wge1xuXHRmb250LXNpemU6IDJ2bWluO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogNXZ3O1xufVxuXG4uaDIge1xuICAgIGZvbnQtc2l6ZTogM3ZtaW47XG59XG5cbi5hbENlbnRlciB7XG5cdGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTcGVjaWVzICovXG4udGhfaGVhZCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1nL2xpZ2h0X3VuZGVybGluZV9oaWdoLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi50aF9uYW1lIHtcblx0Zm9udC1zaXplOiAxLjc1ZW07XG59XG5cbi5oZWFkZXJDb2xvciB7XG5cdGNvbG9yOiAjMjkzYzU2O1xufVxuXG4uc3dfYmFja19vcCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1nL3N3X2JhY2tfb3AucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi8qIEVuZCBTcGVjaWVzICovXG5cbi5ncmlkTGlzdCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogNHZoIGF1dG8gMWZyO1xuXHRncmlkLXJvdy1nYXA6IDF2aDtcblx0aGVpZ2h0OiA5NXZoO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaW5uZXJMaXN0IHtcblx0cGFkZGluZy10b3A6IDF2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xuXHRncmlkLWdhcDogMXZoO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZG91YlBhZ2Uge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2JSAxZnI7XG5cdGhlaWdodDogOTV2aDtcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcblx0cGFkZGluZy10b3A6IDIuNXZoO1xufVxuXG4ubWVudV9hcnJvdyB7XG5cdG1heC1oZWlnaHQ6IDN2aDtcbn1cblxuLnNraWxsRGl2IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuXHRhbGlnbi1pdGVtczogZW5kO1xuXHRqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuXHRtYXJnaW4tYm90dG9tOiAzdmg7XG59XG5cbi5za2lsbCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltZy9saWdodF91bmRlcmxpbmUucG5nJyk7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG5cdGJhY2tncm91bmQtc2l6ZTogOTUlIDE1JTtcbn1cblxuQGtleWZyYW1lcyBmYWRlX2luIHtcblx0MCUgeyBvcGFjaXR5OiAwOyB9XG5cdDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlX2luIHtcblx0MCUgeyBvcGFjaXR5OiAwOyB9XG5cdDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlX2luIHtcblx0MCUgeyBvcGFjaXR5OiAwOyB9XG5cdDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZV9vdXQge1xuXHQwJSB7b3BhY2l0eTogMX1cblx0MTAwJSB7b3BhY2l0eTogMH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVfb3V0IHtcblx0MCUge29wYWNpdHk6IDF9XG5cdDEwMCUge29wYWNpdHk6IDB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlX291dCB7XG5cdDAlIHtvcGFjaXR5OiAxfVxuXHQxMDAlIHtvcGFjaXR5OiAwfVxufVxuXG4uZmFkZV9pbiB7XG5cdGFuaW1hdGlvbi1uYW1lOiBmYWRlX2luO1xuXHRhbmltYXRpb24tZHVyYXRpb246IDc1MG1zO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlX2luO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNzUwbXM7XG5cdC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVfaW47XG5cdC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA3NTBtcztcbn1cblxuLmZhZGVfb3V0IHtcblx0YW5pbWF0aW9uLW5hbWU6IGZhZGVfb3V0O1xuXHRhbmltYXRpb24tZHVyYXRpb246IDM1MG1zO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlX291dDtcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDM1MG1zO1xuXHQtbW96LWFuaW1hdGlvbi1uYW1lOiBmYWRlX291dDtcblx0LW1vei1hbmltYXRpb24tZHVyYXRpb246IDM1MG1zO1xuXHRvcGFjaXR5OiAwO1xufVxuXG4uZmFkZV9udSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ncmlkQ29se2dyaWQtY29sdW1uOiAxO30uZ3JpZENvbDJ7Z3JpZC1jb2x1bW46IDI7fS5ncmlkQ29sM3tncmlkLWNvbHVtbjogMzt9LmdyaWRDb2w0e2dyaWQtY29sdW1uOiA0O30uZ3JpZENvbDV7Z3JpZC1jb2x1bW46IDU7fS5ncmlkQ29sNntncmlkLWNvbHVtbjogNjt9LmdyaWRDb2w3e2dyaWQtY29sdW1uOiA3O30uZ3JpZENvbDgge2dyaWQtY29sdW1uOiA4O30uZ3JpZENvbDkge2dyaWQtY29sdW1uOiA5O30uZ3JpZENvbDEwIHtncmlkLWNvbHVtbjogMTA7fVxuLmdyaWRSb3d7Z3JpZC1yb3c6IDE7fS5ncmlkUm93MiB7Z3JpZC1yb3c6IDJ9LmdyaWRSb3czIHtncmlkLXJvdzogM30uZ3JpZFJvdzQge2dyaWQtcm93OiA0fS5ncmlkUm93NSB7Z3JpZC1yb3c6IDV9LmdyaWRSb3c2IHtncmlkLXJvdzogNn0uZ3JpZFJvdzcge2dyaWQtcm93OiA3fS5ncmlkUm93OCB7Z3JpZC1yb3c6IDh9LmdyaWRSb3c5IHtncmlkLXJvdzogOX1cbiJdfQ== */", '', '']];
            /***/ 
        }),
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var stylesInDom = {};
            var isOldIE = function isOldIE() {
                var memo;
                return function memorize() {
                    if (typeof memo === 'undefined') {
                        // Test for IE <= 9 as proposed by Browserhacks
                        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                        // Tests for existence of standard globals is to allow style-loader
                        // to operate correctly into non-standard environments
                        // @see https://github.com/webpack-contrib/style-loader/issues/177
                        memo = Boolean(window && document && document.all && !window.atob);
                    }
                    return memo;
                };
            }();
            var getTarget = function getTarget() {
                var memo = {};
                return function memorize(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head;
                            }
                            catch (e) {
                                // istanbul ignore next
                                styleTarget = null;
                            }
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                };
            }();
            function listToStyles(list, options) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id]) {
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    }
                    else {
                        newStyles[id].parts.push(part);
                    }
                }
                return styles;
            }
            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    var j = 0;
                    if (domStyle) {
                        domStyle.refs++;
                        for (; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    }
                    else {
                        var parts = [];
                        for (; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }
            function insertStyleElement(options) {
                var style = document.createElement('style');
                if (typeof options.attributes.nonce === 'undefined') {
                    var nonce = true ? __webpack_require__.nc : undefined;
                    if (nonce) {
                        options.attributes.nonce = nonce;
                    }
                }
                Object.keys(options.attributes).forEach(function (key) {
                    style.setAttribute(key, options.attributes[key]);
                });
                if (typeof options.insert === 'function') {
                    options.insert(style);
                }
                else {
                    var target = getTarget(options.insert || 'head');
                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    }
                    target.appendChild(style);
                }
                return style;
            }
            function removeStyleElement(style) {
                // istanbul ignore if
                if (style.parentNode === null) {
                    return false;
                }
                style.parentNode.removeChild(style);
            }
            /* istanbul ignore next  */
            var replaceText = function replaceText() {
                var textStore = [];
                return function replace(index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            }();
            function applyToSingletonTag(style, index, remove, obj) {
                var css = remove ? '' : obj.css; // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = replaceText(index, css);
                }
                else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = style.childNodes;
                    if (childNodes[index]) {
                        style.removeChild(childNodes[index]);
                    }
                    if (childNodes.length) {
                        style.insertBefore(cssNode, childNodes[index]);
                    }
                    else {
                        style.appendChild(cssNode);
                    }
                }
            }
            function applyToTag(style, options, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;
                if (media) {
                    style.setAttribute('media', media);
                }
                if (sourceMap && btoa) {
                    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                } // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    while (style.firstChild) {
                        style.removeChild(style.firstChild);
                    }
                    style.appendChild(document.createTextNode(css));
                }
            }
            var singleton = null;
            var singletonCounter = 0;
            function addStyle(obj, options) {
                var style;
                var update;
                var remove;
                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    style = singleton || (singleton = insertStyleElement(options));
                    update = applyToSingletonTag.bind(null, style, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                }
                else {
                    style = insertStyleElement(options);
                    update = applyToTag.bind(null, style, options);
                    remove = function remove() {
                        removeStyleElement(style);
                    };
                }
                update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                            return;
                        }
                        update(obj = newObj);
                    }
                    else {
                        remove();
                    }
                };
            }
            module.exports = function (list, options) {
                options = options || {};
                options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (!options.singleton && typeof options.singleton !== 'boolean') {
                    options.singleton = isOldIE();
                }
                var styles = listToStyles(list, options);
                addStylesToDom(styles, options);
                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        if (domStyle) {
                            domStyle.refs--;
                            mayRemove.push(domStyle);
                        }
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList, options);
                        addStylesToDom(newStyles, options);
                    }
                    for (var _i = 0; _i < mayRemove.length; _i++) {
                        var _domStyle = mayRemove[_i];
                        if (_domStyle.refs === 0) {
                            for (var j = 0; j < _domStyle.parts.length; j++) {
                                _domStyle.parts[j]();
                            }
                            delete stylesInDom[_domStyle.id];
                        }
                    }
                };
            };
            /***/ 
        }),
        /***/ "./src/styles.css": 
        /*!************************!*\
          !*** ./src/styles.css ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");
            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }
            var options = {};
            options.insert = "head";
            options.singleton = false;
            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
            if (content.locals) {
                module.exports = content.locals;
            }
            /***/ 
        }),
        /***/ 3: 
        /*!******************************!*\
          !*** multi ./src/styles.css ***!
          \******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/penun/code_work/angular/swang/src/styles.css */ "./src/styles.css");
            /***/ 
        })
    }, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
//# sourceMappingURL=styles-es5.js.map
//# sourceMappingURL=styles-es5.js.map