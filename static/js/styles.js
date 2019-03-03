(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "body {\n    display: grid;\n    background-image: url(\"/static/img/starscape.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: round;\n\tcolor: #a4dde5;\n\tfont-family: 'Share Tech Mono', monospace;\n    perspective: 1000px;\n\t-moz-perspective: 1000px;\n\t-webkit-perspective: 1000px;\n    height: 100%;\n    margin: 0;\n}\n\n.sw_back {\n\tbackground-image: url(\"/static/img/sw_back.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n.page {\n\tz-index: 0;\n\tdisplay: grid;\n    grid-template-columns: 2vw auto 2vw;\n    grid-template-rows: 3vh auto;\n    height: 100vh;\n}\n\n.sixty_he{\n    grid-column: 2;\n    grid-row: 2;\n\theight: 94vh;\n}\n\nbutton {\n\tfloat: right;\n\tbackground-color: rgba(84, 123, 168, 0.35);\n\tcolor: #a4dde5;\n\tdisplay: inline-block;\n  \tpadding: 1vh 1vw;\n  \tfont-size: 1.5vmin;\n  \tcursor: pointer;\n  \ttext-align: center;\n  \ttext-decoration: none;\n\tborder-width: 0.4vh;\n\tborder-color: #c0eaf1;\n\tborder-style: double;\n\toutline: none;\n  \tborder-radius: 2vw;\n  \tbox-shadow: 0px 0px 10px 5px #547ba8;\n\tmargin-top: 5px;\n\tz-index: 450;\n}\n\nbutton:hover {\n    box-shadow: 0 0 0.5vh 0.5vw #547ba8;\n\tbackground-color: rgba(84, 123, 168, 0.65);\n}\n\nbutton:active {\n\tbackground-color: rgba(192, 234, 241, 0.5);\n    box-shadow: 0 0 0.5vh 0.5vw rgba(192, 234, 241, 0.75);\n\tcolor: #83d9e6;\n\t-webkit-transform: scale(0.9, 0.9);\n\t        transform: scale(0.9, 0.9);\n}\n\nul {\n\tlist-style: none;\n\twidth: 100%;\n\theight: auto;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nli {\n\twidth: 100%;\n    position: relative;\n    display: inline-flex;\n}\n\n.clickable {\n\tbackground-image: url(\"/static/img/light_underline.png\");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\tbackground-size: 100% 10%;\n\tcursor: pointer;\n\ttext-align: center;\n\tfont-size: 2.5vmin;\n}\n\n.clickable:hover {\n\tbackground-image: url(\"/static/img/light_underline_high.png\");\n\tbackground-size: 100% 100%;\n\tcolor: #293c56;\n\tfont-weight: 200;\n}\n\n.right_col {\n\tfont-size: 2vmin;\n\toverflow-y: auto;\n    padding-left: 5vw;\n}\n\n.h2 {\n    font-size: 3vmin;\n}\n\n.alCenter {\n\tjustify-self: stretch;\n    align-self: center;\n    text-align: center;\n}\n\n@keyframes fade_in {\n\t0% { opacity: 0; }\n\t100% { opacity: 1; }\n}\n\n@-webkit-keyframes fade_in {\n\t0% { opacity: 0; }\n\t100% { opacity: 1; }\n}\n\n@keyframes fade_out {\n\t0% {opacity: 1}\n\t100% {opacity: 0}\n}\n\n@-webkit-keyframes fade_out {\n\t0% {opacity: 1}\n\t100% {opacity: 0}\n}\n\n.fade_in {\n\tanimation-name: fade_in;\n\tanimation-duration: 750ms;\n\t-webkit-animation-name: fade_in;\n\t-webkit-animation-duration: 750ms;\n\t-moz-animation-name: fade_in;\n\t-moz-animation-duration: 750ms;\n}\n\n.fade_out {\n\tanimation-name: fade_out;\n\tanimation-duration: 350ms;\n\t-webkit-animation-name: fade_out;\n\t-webkit-animation-duration: 350ms;\n\t-moz-animation-name: fade_out;\n\t-moz-animation-duration: 350ms;\n\topacity: 0;\n}\n\n.fade_nu {\n\tdisplay: none;\n}\n\n.gridCol{grid-column: 1;}\n\n.gridCol2{grid-column: 2;}\n\n.gridCol3{grid-column: 3;}\n\n.gridCol4{grid-column: 4;}\n\n.gridCol5{grid-column: 5;}\n\n.gridCol6{grid-column: 6;}\n\n.gridCol7{grid-column: 7;}\n\n.gridCol8 {grid-column: 8;}\n\n.gridCol9 {grid-column: 9;}\n\n.gridCol10 {grid-column: 10;}\n\n.gridRow{grid-row: 1;}\n\n.gridRow2 {grid-row: 2}\n\n.gridRow3 {grid-row: 3}\n\n.gridRow4 {grid-row: 4}\n\n.gridRow5 {grid-row: 5}\n\n.gridRow6 {grid-row: 6}\n\n.gridRow7 {grid-row: 7}\n\n.gridRow8 {grid-row: 8}\n\n.gridRow9 {grid-row: 9}\n\n/*# sourceMappingURL=data:application/json;base64,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QUFXLFdBQVc7O0FBQUMsV0FBVyxXQUFXOztBQUFDLFdBQVcsV0FBVyIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvc3RhcnNjYXBlLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcblx0Y29sb3I6ICNhNGRkZTU7XG5cdGZvbnQtZmFtaWx5OiAnU2hhcmUgVGVjaCBNb25vJywgbW9ub3NwYWNlO1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG5cdC1tb3otcGVyc3BlY3RpdmU6IDEwMDBweDtcblx0LXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zd19iYWNrIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvc3dfYmFjay5wbmdcIik7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucGFnZSB7XG5cdHotaW5kZXg6IDA7XG5cdGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAydncgYXV0byAydnc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzdmggYXV0bztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2l4dHlfaGV7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgZ3JpZC1yb3c6IDI7XG5cdGhlaWdodDogOTR2aDtcbn1cblxuYnV0dG9uIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxMjMsIDE2OCwgMC4zNSk7XG5cdGNvbG9yOiAjYTRkZGU1O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIFx0cGFkZGluZzogMXZoIDF2dztcbiAgXHRmb250LXNpemU6IDEuNXZtaW47XG4gIFx0Y3Vyc29yOiBwb2ludGVyO1xuICBcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGJvcmRlci13aWR0aDogMC40dmg7XG5cdGJvcmRlci1jb2xvcjogI2MwZWFmMTtcblx0Ym9yZGVyLXN0eWxlOiBkb3VibGU7XG5cdG91dGxpbmU6IG5vbmU7XG4gIFx0Ym9yZGVyLXJhZGl1czogMnZ3O1xuICBcdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggIzU0N2JhODtcblx0bWFyZ2luLXRvcDogNXB4O1xuXHR6LWluZGV4OiA0NTA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXZoIDAuNXZ3ICM1NDdiYTg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoODQsIDEyMywgMTY4LCAwLjY1KTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAyMzQsIDI0MSwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41dmggMC41dncgcmdiYSgxOTIsIDIzNCwgMjQxLCAwLjc1KTtcblx0Y29sb3I6ICM4M2Q5ZTY7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xufVxuXG51bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cblxubGkge1xuXHR3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5jbGlja2FibGUge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9saWdodF91bmRlcmxpbmUucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAyLjV2bWluO1xufVxuXG4uY2xpY2thYmxlOmhvdmVyIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvbGlnaHRfdW5kZXJsaW5lX2hpZ2gucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0Y29sb3I6ICMyOTNjNTY7XG5cdGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5yaWdodF9jb2wge1xuXHRmb250LXNpemU6IDJ2bWluO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogNXZ3O1xufVxuXG4uaDIge1xuICAgIGZvbnQtc2l6ZTogM3ZtaW47XG59XG5cbi5hbENlbnRlciB7XG5cdGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVfaW4ge1xuXHQwJSB7IG9wYWNpdHk6IDA7IH1cblx0MTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVfaW4ge1xuXHQwJSB7IG9wYWNpdHk6IDA7IH1cblx0MTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVfaW4ge1xuXHQwJSB7IG9wYWNpdHk6IDA7IH1cblx0MTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlX291dCB7XG5cdDAlIHtvcGFjaXR5OiAxfVxuXHQxMDAlIHtvcGFjaXR5OiAwfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZV9vdXQge1xuXHQwJSB7b3BhY2l0eTogMX1cblx0MTAwJSB7b3BhY2l0eTogMH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVfb3V0IHtcblx0MCUge29wYWNpdHk6IDF9XG5cdDEwMCUge29wYWNpdHk6IDB9XG59XG5cbi5mYWRlX2luIHtcblx0YW5pbWF0aW9uLW5hbWU6IGZhZGVfaW47XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogNzUwbXM7XG5cdC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVfaW47XG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3NTBtcztcblx0LW1vei1hbmltYXRpb24tbmFtZTogZmFkZV9pbjtcblx0LW1vei1hbmltYXRpb24tZHVyYXRpb246IDc1MG1zO1xufVxuXG4uZmFkZV9vdXQge1xuXHRhbmltYXRpb24tbmFtZTogZmFkZV9vdXQ7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMzUwbXM7XG5cdC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVfb3V0O1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMzUwbXM7XG5cdC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVfb3V0O1xuXHQtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMzUwbXM7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5mYWRlX251IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmdyaWRDb2x7Z3JpZC1jb2x1bW46IDE7fS5ncmlkQ29sMntncmlkLWNvbHVtbjogMjt9LmdyaWRDb2wze2dyaWQtY29sdW1uOiAzO30uZ3JpZENvbDR7Z3JpZC1jb2x1bW46IDQ7fS5ncmlkQ29sNXtncmlkLWNvbHVtbjogNTt9LmdyaWRDb2w2e2dyaWQtY29sdW1uOiA2O30uZ3JpZENvbDd7Z3JpZC1jb2x1bW46IDc7fS5ncmlkQ29sOCB7Z3JpZC1jb2x1bW46IDg7fS5ncmlkQ29sOSB7Z3JpZC1jb2x1bW46IDk7fS5ncmlkQ29sMTAge2dyaWQtY29sdW1uOiAxMDt9XG4uZ3JpZFJvd3tncmlkLXJvdzogMTt9LmdyaWRSb3cyIHtncmlkLXJvdzogMn0uZ3JpZFJvdzMge2dyaWQtcm93OiAzfS5ncmlkUm93NCB7Z3JpZC1yb3c6IDR9LmdyaWRSb3c1IHtncmlkLXJvdzogNX0uZ3JpZFJvdzYge2dyaWQtcm93OiA2fS5ncmlkUm93NyB7Z3JpZC1yb3c6IDd9LmdyaWRSb3c4IHtncmlkLXJvdzogOH0uZ3JpZFJvdzkge2dyaWQtcm93OiA5fVxuIl19 */", '', '']]

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