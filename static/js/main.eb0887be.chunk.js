(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_ahmet_Desktop_Kodlamalar_GITHUB_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_ahmet_Desktop_Kodlamalar_GITHUB_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_ahmet_Desktop_Kodlamalar_GITHUB_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_Users_ahmet_Desktop_Kodlamalar_GITHUB_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_CSS_main_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),_CSS_main_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_CSS_main_css__WEBPACK_IMPORTED_MODULE_5__),Calculator=function(_React$Component){Object(C_Users_ahmet_Desktop_Kodlamalar_GITHUB_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_React$Component);var _super=Object(C_Users_ahmet_Desktop_Kodlamalar_GITHUB_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var e;Object(C_Users_ahmet_Desktop_Kodlamalar_GITHUB_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _=arguments.length,a=new Array(_),t=0;t<_;t++)a[t]=arguments[t];return(e=_super.call.apply(_super,[this].concat(a))).state={},e}return Object(C_Users_ahmet_Desktop_Kodlamalar_GITHUB_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"inputCalc",value:function(){var e=document.getElementsByName("input")[0];e.value="0",e.style.fontSize="80px";for(var _=0;_<document.getElementsByClassName("grid-item").length;_++)document.getElementsByClassName("grid-item")[_].style.pointerEvents="visible";document.getElementsByClassName("inputCalc")[0].style.textAlign="right"}},{key:"inputNumbers",value:function(e){var _=document.getElementsByName("input")[0],a=window.matchMedia("(max-width: 576px)");if("0"===_.value)_.value=_.value.slice(0,-1),_.value+=parseInt(e,10);else if(0!==_.value&&(_.value+=parseInt(e,10),_.value.length>5&&_.value.length<8?a.matches?_.style.fontSize="15vw":_.style.fontSize="50px":_.value.length<5?a.matches?_.style.fontSize="20vw":_.style.fontSize="80px":_.value.length>8&&(a.matches?_.style.fontSize="10vw":_.style.fontSize="30px"),_.value.length>12)){_.value="ERROR",document.getElementsByClassName("inputCalc")[0].style.textAlign="center";for(var t=0;t<document.getElementsByClassName("grid-item").length;t++)document.getElementsByClassName("grid-item")[t].style.pointerEvents="none";document.getElementsByClassName("AC")[0].style.pointerEvents="visible"}}},{key:"equal",value:function equal(){var val=document.getElementsByName("input")[0],evaled=eval(val.value);val.value=evaled}},{key:"inputSymbols",value:function(e){var _=document.getElementsByName("input")[0];"X"===e&&(e="*"),"0"!==_.value&&_.value.match(/\d$/gi)&&(_.value=_.value+" "+e+" ")}},{key:"plusMinus",value:function(){var e=document.getElementsByName("input")[0];e.value=-e.value}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container bgBlack"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"inputCalcCont"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input",{name:"input",className:"inputCalc",disabled:!0,value:"0",type:"text"})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"grid-container"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:this.inputCalc,className:"grid-item AC"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"symbol grey"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"AC"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.plusMinus()},className:"grid-item plusMinus"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"symbol grey"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"-/+"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputSymbols("%")},className:"grid-item remain"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:" symbol grey"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"%"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputSymbols("/")},className:"grid-item divide"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"symbol"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"/"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(7)},className:"grid-item seven"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"7"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(8)},className:"grid-item eight"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"8"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(9)},className:"grid-item nine"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"9"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputSymbols("X")},className:"grid-item multiply"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"symbol"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"x"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(4)},className:"grid-item four"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"4"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(5)},className:"grid-item five"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"5"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(6)},className:"grid-item six"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"6"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputSymbols("-")},className:"grid-item minus"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"symbol"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"-"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(1)},className:"grid-item one"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"1"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(2)},className:"grid-item two"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"2"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(3)},className:"grid-item three"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"3"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputSymbols("+")},className:"grid-item plus"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"symbol"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"+"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputNumbers(0)},className:"grid-item zero"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"0"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.inputSymbols(".")},className:"grid-item point"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"symbol"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"."))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.equal()},className:"grid-item equal"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"symbol"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"=")))))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Calculator},,,,,function(e,_,a){e.exports=a(9)},function(e,_,a){"use strict";a.r(_);var t=a(0),l=a.n(t),r=a(2),n=a.n(r),c=(a(14),a(3));n.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,null)),document.getElementById("root"))},,,,,function(e,_,a){},function(e,_,a){}],[[8,1,2]]]);
//# sourceMappingURL=main.eb0887be.chunk.js.map