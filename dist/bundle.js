/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Palanquin:wght@200;300;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\nbody {\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n}\\nbody::-webkit-scrollbar {\\n  display: none;\\n\\n}\\n\\nmain {\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  font-family: 'Palanquin', sans-serif;\\n}\\n\\n/*OUTPUTS*/\\n#outputs {\\n  width: 80vw;\\n  margin: 5%;\\n  overflow-x: hidden;\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n}\\n#outputs::-webkit-scrollbar {\\n  display: none;\\n}\\n\\nh1 {\\n  color: #2cb8ab;\\n  font-family: 'Palanquin', sans-serif;\\n  text-transform: uppercase;\\n  font-weight: 700;\\n  margin-bottom: 20px;\\n}\\n\\ntable {\\n  table-layout: fixed;\\n  border-collapse: collapse;\\n  font-family: 'Palanquin', sans-serif;\\n  letter-spacing: 0.05em;\\n  width: 100%;\\n}\\n\\n.thirty {\\n width: 30%;\\n}\\n\\nth {\\n  padding: 10px;\\n  text-align: left;\\n  background-color: #de8b68;\\n  color: white;\\n  font-weight: 500;\\n  text-transform: uppercase;\\n  font-size: 18px;\\n  position: sticky;\\n  top: 0;\\n}\\n\\ntr {\\n  font-weight: 300;\\n  font-size: 16px;\\n  min-width: 50%;\\n}\\n\\ntbody>*>* {\\n  padding-left: 10px;\\n}\\n\\ntr:nth-child(even) {\\n  background-color: #eeeae2;\\n}\\n\\n.tableCheck {\\n  height: 15px;\\n  width: 15px;\\n  background-color: white;\\n  border-radius: 50%;\\n  vertical-align: middle;\\n  border: 1px solid #e4bfaf;\\n  appearance: none;\\n  -webkit-appearance: none;\\n  outline: none;\\n  cursor: pointer;\\n}\\n\\n.tableCheck:checked {\\n  background-color: #de8b68;\\n  border-color: #de8b68;\\n}\\n\\n.bin {\\n  height: 25px;\\n  width: 25px;\\n  margin-top: 2px;\\n  margin-bottom: 2px;\\n  opacity: 0;\\n}\\n\\n.bin:hover {\\n  opacity: 100;\\n}\\n\\n/*INPUTS*/\\n#inputs {\\n  box-shadow: 0px 0px 8px #ecdad2;\\n  padding: 5%;\\n  position: relative;\\n}\\n\\n.box {\\n  margin-bottom: 75px;\\n}\\n\\n.info {\\n  min-width: 250px;\\n  height: 40px;\\n  border-style: solid;\\n  border-radius: 5px;\\n  border-width: 1px;\\n  border-color: #de8b68;\\n  padding-left: 15px;\\n  font-family: 'Palanquin', sans-serif;\\n  letter-spacing: 0.05em;\\n  font-weight: 200;\\n}\\n\\nlabel {\\n  display: block;\\n  color: #de8b68;\\n  text-transform: uppercase;\\n  letter-spacing: 0.05em;\\n  font-size: 14px;\\n  font-weight: 500;\\n  margin-left: 15px;\\n  margin-top: -55px;\\n}\\n\\n.required {\\n  text-align: right;\\n  color: #a89d86;\\n  font-size: 11px;\\n  margin-right: 5px;\\n}\\n\\nspan {\\n  background-color: white;\\n  padding-left: 5px;\\n  padding-right: 5px;\\n}\\n\\ninput:focus {\\n  outline: none;\\n  box-shadow: 0px 0px 4px #de8b68;\\n}\\n\\n#read-toggle {\\n  isolation: isolate;\\n  position: relative;\\n  width: 150px;\\n  height: 30px;\\n  border-radius: 15px;\\n  border-style: solid;\\n  border-width: 1px;\\n  border-color: #de8b68;\\n  overflow: hidden;\\n  float: right;\\n  margin-bottom: 50px;\\n}\\n\\n#read-label {\\n  margin: 0; /* remove label margin */\\n  width: 75px;\\n  height: 30px;\\n  line-height: 30px;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  z-index: 2;\\n  text-align: center;\\n  color: #de8b68;\\n}\\n\\n#read-check {\\n  width: 150px;\\n  height: 30px;\\n  cursor: pointer;\\n  opacity: 0%;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  z-index: 3;\\n}\\n\\n#read-check:focus {\\n  box-shadow: none;\\n}\\n\\n#read-indicator {\\n  background-color: #de8b68;\\n  width: 80px;\\n  height: 100%;\\n  border-radius: 14px;\\n  z-index: 1;\\n  margin-left: 75px; /* make toggle easy-peasy */\\n}\\n\\n#read-check:checked ~ #read-indicator {\\n  transform: translateX(0px);\\n  -webkit-transform: translateX(0px);\\n  transition: transform 300ms linear;\\n}\\n\\n#read-check:not(:checked) ~ #read-indicator {\\n  transform: translateX(-75px);\\n  -webkit-transform: translateX(-75px);\\n  transition: transform 300ms linear;\\n}\\n\\n\\nbutton {\\n  border: none;\\n  background-color: rgb(0,0,0,0);\\n  color: white;\\n  font-family: 'Palanquin', sans-serif;\\n  font-size: 16px;\\n  font-weight: 500;\\n}\\n\\n#add-btn {\\n  cursor: pointer;\\n  width: 100%;\\n  height: 34px;\\n  border: 1px solid #2cb8ab;\\n  border-radius: 15px;\\n  background-color: white;\\n  color: #2cb8ab;\\n  text-transform: uppercase;\\n  letter-spacing: 0.05em;\\n  float: right;\\n  transition-duration: 0.25s;\\n  transition-timing-function: linear; /* no time to appreciate ease-in-out */\\n  transition-delay: 0.02s;\\n}\\n\\n#add-btn:hover {\\n  background-color: #2cb8ab;\\n  color: white;\\n}\\n\\n#menu {\\n  background-color: #2cb8ab;\\n  color: white;\\n  position: fixed;\\n  left: 0;\\n  bottom: 20px;\\n  border-radius: 0px 25px 25px 0px;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#enter {\\n  width: 100px;\\n  display: none;\\n}\\n\\n#opener {\\n  padding: 10px;\\n  padding-right: 15px;\\n  cursor: pointer;\\n}\\n\\n@media (max-width: 1200px) {\\n  #outputs {\\n    width: 85vw;\\n    margin: 3%;\\n  }\\n\\n  #inputs {\\n    padding: 3%;\\n  }\\n}\\n\\n@media (max-width: 1000px) {\\n  main {\\n    flex-direction: column-reverse;\\n    height: auto;\\n  }\\n\\n  #inputs {\\n    padding: 5%;\\n  }\\n\\n  #media-box {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: flex-end;\\n    flex-wrap: wrap;\\n  }\\n\\n  .box {\\n    margin-bottom: 55px;\\n  }\\n\\n  #read-toggle {\\n    float: left;\\n  }\\n\\n  #read-check {\\n    left: 0;\\n    right: auto;\\n  }\\n\\n  #outputs {\\n    width: auto;\\n    margin: 5%;\\n    overflow-x: visible;\\n    -ms-overflow-style: auto;\\n  }\\n\\n  th {\\n    font-size: 14px;\\n  }\\n}\\n\\n@media (max-width: 500px) {\\n  th {\\n    font-size: 10px;\\n  }\\n\\n  .bin {\\n    opacity: 0.5;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://books-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://books-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://books-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://books-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://books-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://books-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://books-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://books-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://books-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://books-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction login () {\n  const menu = document.createElement('div')\n  menu.id = 'menu'\n  const enter = document.createElement('button')\n  enter.id = 'enter'\n  enter.innerHTML = 'LOGIN'\n  enter.addEventListener('click', () => {\n    (enter.innerHTML === 'LOGIN') ? enter.innerHTML = 'LOGOUT' : enter.innerHTML = 'LOGIN'\n  })\n  const opener = document.createElement('button')\n  opener.id = 'opener'\n  opener.innerHTML = '>'\n  opener.addEventListener('click', () => {\n    if (opener.innerHTML === '>' || opener.innerHTML ===  '&gt;') {\n      opener.innerHTML = '<'\n      enter.style.display = 'initial' \n    } else {\n      opener.innerHTML = '>'\n      enter.style.display = 'none' \n    }\n  })\n\n  menu.appendChild(enter)\n  menu.appendChild(opener)\n\n  return menu\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n\n//# sourceURL=webpack://books-list/./src/login.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bin.png */ \"./src/bin.png\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nlet bookList = document.getElementById('bookList')\nlet title = document.getElementById('title')\nlet author = document.getElementById('author')\nlet year = document.getElementById('year')\nlet readCheck = document.getElementById('read-check')\nlet readLabel = document.getElementById('read-label')\nlet add = document.getElementById('add-btn')\n\nlet myLibrary = []\nlet newId = 0\n\nfunction toggleRead(objIndex) {\n    myLibrary[objIndex].read = !myLibrary[objIndex].read\n}\n\nfunction removeBook (objId) {\n    myLibrary = myLibrary.filter(obj => obj.id !== objId)\n}\n\nfunction makeTable (table, data) {\n    for (let element of data) {\n        let objectId = element.id\n        let objectIndex = myLibrary.indexOf(element)\n        let row = table.insertRow()\n\n        for (let key in element) {\n            let cell = row.insertCell()\n            if (typeof(element[key]) === 'number') {\n                cell. className = 'binCell'\n                let image = document.createElement('img')\n                image.setAttribute('src', _bin_png__WEBPACK_IMPORTED_MODULE_0__)\n                image.className = 'bin'\n                image.addEventListener('click', () => {\n                    removeBook(objectId)\n                    newTable()\n                })\n                cell.appendChild(image)\n            } else if (typeof(element[key]) === 'boolean') {\n                let x = document.createElement('input')\n                x.setAttribute('type', 'checkbox')\n                if (element[key]) x.setAttribute('checked', true)\n                x.className = 'tableCheck'\n                x.addEventListener('click', () => {\n                    toggleRead(objectIndex)\n                })\n                cell.appendChild(x)\n            } else {\n                let text = document.createTextNode(element[key])\n                cell.appendChild(text)\n            }\n        }\n    }\n}\nmakeTable(bookList, myLibrary)\n\nfunction newTable() {\n    bookList.innerHTML = ''\n    makeTable(bookList, myLibrary)\n}\n\nfunction addBook() {\n    let book = {\n        title: title.value,\n        author: author.value,\n        year: year.value.toString(),\n        read: readCheck.checked,\n        id: newId\n    }\n\n    newId++\n    myLibrary.push(book)\n    newTable()\n}\n\nreadCheck.addEventListener('click', () => {\n    (readCheck.checked) ? \n      readLabel.style.color = 'white' : \n      readLabel.style.color = '#de8b68'\n})\n\nadd.addEventListener('click', () => {\n  const titleNotOk = title.validity.valueMissing\n  const authorNotOk = author.validity.valueMissing\n  const dateFuture = year.validity.rangeOverflow\n  const dateOld = year.validity.rangeUnderflow\n\n  if (titleNotOk) {\n    title.setCustomValidity('The title is required');\n    title.reportValidity();\n  } else if (authorNotOk) {\n    author.setCustomValidity('The author is required');\n    author.reportValidity();\n  } else if (dateFuture) {\n    year.setCustomValidity('This book is from the future!?');\n    year.reportValidity();\n  } else if (dateOld) {\n    year.setCustomValidity('This book is older than writing itself!?');\n    year.reportValidity();\n  }\n\n  if (titleNotOk || authorNotOk || dateFuture || dateOld) {\n      return\n  }\n  addBook();\n})\n\ndocument.body.appendChild((0,_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n\n//# sourceURL=webpack://books-list/./src/script.js?");

/***/ }),

/***/ "./src/bin.png":
/*!*********************!*\
  !*** ./src/bin.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"751955b7ca5aa293f6c4.png\";\n\n//# sourceURL=webpack://books-list/./src/bin.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;