(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "body {\n    display: grid;\n    background-image: url(\"/static/img/starscape.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: round;\n\tcolor: #a4dde5;\n\tfont-family: 'Share Tech Mono', monospace;\n    perspective: 1000px;\n\t-moz-perspective: 1000px;\n\t-webkit-perspective: 1000px;\n    height: 100%;\n    margin: 0;\n}\n\n.sw_back {\n\tbackground-image: url(\"/static/img/sw_back.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.page {\n\tz-index: 0;\n\tdisplay: grid;\n    grid-template-columns: 2vw auto 2vw;\n    grid-template-rows: 3vh auto;\n    height: 100vh;\n}\n\n.sixty_he{\n    grid-column: 2;\n    grid-row: 2;\n\theight: 94vh;\n}\n\nbutton {\n\tfloat: right;\n\tbackground-color: rgba(84, 123, 168, 0.35);\n\tcolor: #a4dde5;\n\tdisplay: inline-block;\n  \tpadding: 1vh 1vw;\n  \tfont-size: 1.5vmin;\n  \tcursor: pointer;\n  \ttext-align: center;\n  \ttext-decoration: none;\n\tborder-width: 0.4vh;\n\tborder-color: #c0eaf1;\n\tborder-style: double;\n\toutline: none;\n  \tborder-radius: 2vw;\n  \tbox-shadow: 0px 0px 10px 5px #729cc1;\n\tmargin-top: 5px;\n\tz-index: 450;\n}\n\nbutton:hover {\n    box-shadow: 0 0 0.5vh 0.5vw #547ba8;\n\tbackground-color: rgba(84, 123, 168, 0.65);\n}\n\nbutton:active {\n\tbackground-color: rgba(192, 234, 241, 0.5);\n    box-shadow: 0 0 0.5vh 0.5vw rgba(192, 234, 241, 0.75);\n\tcolor: #83d9e6;\n\ttransform: scale(0.9, 0.9);\n}\n\nul {\n\tlist-style: none;\n\twidth: 100%;\n\theight: auto;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\twidth: 100%;\n    position: relative;\n    display: inline-flex;\n}\n\n.clickable {\n\tbackground-image: url(\"/assets/img/light_underline.png\");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\tbackground-size: 100% 10%;\n\tcursor: pointer;\n\ttext-align: center;\n\tfont-size: 2.5vmin;\n}\n\n.clickable:hover {\n\tbackground-image: url(\"/assets/img/light_underline_high.png\");\n\tbackground-size: 100% 100%;\n\tcolor: #293c56;\n\tfont-weight: 200;\n}\n\n.right_col {\n\tfont-size: 2vmin;\n\toverflow-y: auto;\n    padding-left: 5vw;\n}\n\n.h2 {\n    font-size: 3vmin;\n}\n\n.alCenter {\n\tjustify-self: stretch;\n    align-self: center;\n    text-align: center;\n}\n\n@keyframes fade_in {\n\t0% { opacity: 0; }\n\t100% { opacity: 1; }\n}\n\n@-webkit-keyframes fade_in {\n\t0% { opacity: 0; }\n\t100% { opacity: 1; }\n}\n\n@keyframes fade_out {\n\t0% {opacity: 1}\n\t100% {opacity: 0}\n}\n\n@-webkit-keyframes fade_out {\n\t0% {opacity: 1}\n\t100% {opacity: 0}\n}\n\n.fade_in {\n\tanimation-name: fade_in;\n\tanimation-duration: 750ms;\n\t-webkit-animation-name: fade_in;\n\t-webkit-animation-duration: 750ms;\n\t-moz-animation-name: fade_in;\n\t-moz-animation-duration: 750ms;\n}\n\n.fade_out {\n\tanimation-name: fade_out;\n\tanimation-duration: 350ms;\n\t-webkit-animation-name: fade_out;\n\t-webkit-animation-duration: 350ms;\n\t-moz-animation-name: fade_out;\n\t-moz-animation-duration: 350ms;\n\topacity: 0;\n}\n\n.fade_nu {\n\tdisplay: none;\n}\n\n.gridCol{grid-column: 1;}\n\n.gridCol2{grid-column: 2;}\n\n.gridCol3{grid-column: 3;}\n\n.gridCol4{grid-column: 4;}\n\n.gridCol5{grid-column: 5;}\n\n.gridCol6{grid-column: 6;}\n\n.gridCol7{grid-column: 7;}\n\n.gridCol8 {grid-column: 8;}\n\n.gridCol9 {grid-column: 9;}\n\n.gridCol10 {grid-column: 10;}\n\n.gridRow{grid-row: 1;}\n\n.gridRow2 {grid-row: 2}\n\n.gridRow3 {grid-row: 3}\n\n.gridRow4 {grid-row: 4}\n\n.gridRow5 {grid-row: 5}\n\n.gridRow6 {grid-row: 6}\n\n.gridRow7 {grid-row: 7}\n\n.gridRow8 {grid-row: 8}\n\n.gridRow9 {grid-row: 9}\n\n/*# sourceMappingURL=data:application/json;base64,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QyxXQUFXLFdBQVc7O0FBQUMsV0FBVyxXQUFXIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9zdGFyc2NhcGUucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuXHRjb2xvcjogI2E0ZGRlNTtcblx0Zm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcblx0LW1vei1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuXHQtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnN3X2JhY2sge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9zd19iYWNrLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5wYWdlIHtcblx0ei1pbmRleDogMDtcblx0ZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJ2dyBhdXRvIDJ2dztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDN2aCBhdXRvO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5zaXh0eV9oZXtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogMjtcblx0aGVpZ2h0OiA5NHZoO1xufVxuXG5idXR0b24ge1xuXHRmbG9hdDogcmlnaHQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoODQsIDEyMywgMTY4LCAwLjM1KTtcblx0Y29sb3I6ICNhNGRkZTU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgXHRwYWRkaW5nOiAxdmggMXZ3O1xuICBcdGZvbnQtc2l6ZTogMS41dm1pbjtcbiAgXHRjdXJzb3I6IHBvaW50ZXI7XG4gIFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICBcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Ym9yZGVyLXdpZHRoOiAwLjR2aDtcblx0Ym9yZGVyLWNvbG9yOiAjYzBlYWYxO1xuXHRib3JkZXItc3R5bGU6IGRvdWJsZTtcblx0b3V0bGluZTogbm9uZTtcbiAgXHRib3JkZXItcmFkaXVzOiAydnc7XG4gIFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCAjNzI5Y2MxO1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdHotaW5kZXg6IDQ1MDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41dmggMC41dncgIzU0N2JhODtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NCwgMTIzLCAxNjgsIDAuNjUpO1xufVxuXG5idXR0b246YWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTIsIDIzNCwgMjQxLCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjV2aCAwLjV2dyByZ2JhKDE5MiwgMjM0LCAyNDEsIDAuNzUpO1xuXHRjb2xvcjogIzgzZDllNjtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XG59XG5cbnVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuXG5saSB7XG5cdHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmNsaWNrYWJsZSB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2xpZ2h0X3VuZGVybGluZS5wbmdcIik7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMCU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDIuNXZtaW47XG59XG5cbi5jbGlja2FibGU6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9saWdodF91bmRlcmxpbmVfaGlnaC5wbmdcIik7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRjb2xvcjogIzI5M2M1Njtcblx0Zm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnJpZ2h0X2NvbCB7XG5cdGZvbnQtc2l6ZTogMnZtaW47XG5cdG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiA1dnc7XG59XG5cbi5oMiB7XG4gICAgZm9udC1zaXplOiAzdm1pbjtcbn1cblxuLmFsQ2VudGVyIHtcblx0anVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZmFkZV9pbiB7XG5cdDAlIHsgb3BhY2l0eTogMDsgfVxuXHQxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZV9pbiB7XG5cdDAlIHsgb3BhY2l0eTogMDsgfVxuXHQxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZV9pbiB7XG5cdDAlIHsgb3BhY2l0eTogMDsgfVxuXHQxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVfb3V0IHtcblx0MCUge29wYWNpdHk6IDF9XG5cdDEwMCUge29wYWNpdHk6IDB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlX291dCB7XG5cdDAlIHtvcGFjaXR5OiAxfVxuXHQxMDAlIHtvcGFjaXR5OiAwfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZV9vdXQge1xuXHQwJSB7b3BhY2l0eTogMX1cblx0MTAwJSB7b3BhY2l0eTogMH1cbn1cblxuLmZhZGVfaW4ge1xuXHRhbmltYXRpb24tbmFtZTogZmFkZV9pbjtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiA3NTBtcztcblx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZV9pbjtcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDc1MG1zO1xuXHQtbW96LWFuaW1hdGlvbi1uYW1lOiBmYWRlX2luO1xuXHQtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNzUwbXM7XG59XG5cbi5mYWRlX291dCB7XG5cdGFuaW1hdGlvbi1uYW1lOiBmYWRlX291dDtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAzNTBtcztcblx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZV9vdXQ7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzNTBtcztcblx0LW1vei1hbmltYXRpb24tbmFtZTogZmFkZV9vdXQ7XG5cdC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAzNTBtcztcblx0b3BhY2l0eTogMDtcbn1cblxuLmZhZGVfbnUge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4uZ3JpZENvbHtncmlkLWNvbHVtbjogMTt9LmdyaWRDb2wye2dyaWQtY29sdW1uOiAyO30uZ3JpZENvbDN7Z3JpZC1jb2x1bW46IDM7fS5ncmlkQ29sNHtncmlkLWNvbHVtbjogNDt9LmdyaWRDb2w1e2dyaWQtY29sdW1uOiA1O30uZ3JpZENvbDZ7Z3JpZC1jb2x1bW46IDY7fS5ncmlkQ29sN3tncmlkLWNvbHVtbjogNzt9LmdyaWRDb2w4IHtncmlkLWNvbHVtbjogODt9LmdyaWRDb2w5IHtncmlkLWNvbHVtbjogOTt9LmdyaWRDb2wxMCB7Z3JpZC1jb2x1bW46IDEwO31cbi5ncmlkUm93e2dyaWQtcm93OiAxO30uZ3JpZFJvdzIge2dyaWQtcm93OiAyfS5ncmlkUm93MyB7Z3JpZC1yb3c6IDN9LmdyaWRSb3c0IHtncmlkLXJvdzogNH0uZ3JpZFJvdzUge2dyaWQtcm93OiA1fS5ncmlkUm93NiB7Z3JpZC1yb3c6IDZ9LmdyaWRSb3c3IHtncmlkLXJvdzogN30uZ3JpZFJvdzgge2dyaWQtcm93OiA4fS5ncmlkUm93OSB7Z3JpZC1yb3c6IDl9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/penun/angular/swutil/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map