webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-start></app-start>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__start_slider_component__ = __webpack_require__("../../../../../src/app/start/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__start_header_component__ = __webpack_require__("../../../../../src/app/start/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_2__start_start_component__["a" /* StartComponent */],
            __WEBPACK_IMPORTED_MODULE_1__start_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_0__start_slider_component__["a" /* SliderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/start/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\n/* Header css\n*******************************************************/\n\nbody {\n    font-family: \"Lato\", sans-serif;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n}\n\n.sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color:white;\n    display: block;\n    transition: 0.3s;\n}\n\n.sidenav a:hover {\n    color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n\n.header{\n    background-color:white;\n    width: 100%;\n    height: 85px;\n    border-bottom: solid 1px #C9C7C7; \n}\nspan{\n    margin-left: 5%;\n    padding: 2%;\n}\nbutton{\n    margin-left: 10%;\n}\n/*******************************************************/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"sideWidth\" class=\"sidenav\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <br />\n    <a>Change interval</a>\n    <br />\n    <button>&#x25B2;</button>\n    <button>&#x25BC;</button>\n   <!-- <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a> -->\n</div>\n\n<div class=\"header\">\n    <span style=\"cursor:pointer\" (click)=\"openNav()\">\n        <img src=\"http://education.hemsida.eu/wp-content/uploads/2015/10/softhouse-education-logo1-300x58.png\">\n    </span>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/start/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.sideWidth = 0;
    }
    HeaderComponent.prototype.openNav = function (event) {
        this.sideWidth = 250;
    };
    HeaderComponent.prototype.closeNav = function () {
        this.sideWidth = 0;
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], HeaderComponent.prototype, "time", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sidenav'),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "sidenav", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/start/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/start/header.component.css")]
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/start/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel{\n    /* overflow: hidden; */\n    width: 100%;\n}\n\n.slides{\n    list-style: none;\n    position: absolute;\n    width: 500%;\n\n    overflow: hidden;\n    -webkit-animation:carousel 20s infinite;\n    animation:carousel 20s infinite;\n}\n\n.slides > li{\n    position: relative;\n    float: left;\n    width: 20%;\n}\n\n.carousel img{\n    display: block;\n    width: 50%;\n    max-width: 100%;\n}\n\n.carousel h2{\n    margin-bottom: 0;\n    font-size:1em;\n    padding:1.5em 0.5em 1.5em 0.5em;\n    position:absolute;\n    right:0px;\n    bottom:0px;\n    left:0px;\n    text-align:center;\n    color:#fff;\n    background-color:rgba(0,0,0,0.75);\n    text-transform: uppercase;\n}\n\n@-webkit-keyframes carousel{\n    0%    { left:20%; }\n    11%   { left:20%; }\n    12.5% { left:-75%; }\n    23.5% { left:-75%; }\n    25%   { left:-175%; }\n    36%   { left:-175%; }\n    37.5% { left:-275%; }\n    48.5% { left:-275%; }\n    50%   { left:-375%; }\n    61%   { left:-375%; }\n    62.5% { left:-275%; }\n    73.5% { left:-275%; }\n    75%   { left:-175%; }\n    86%   { left:-175%; }\n    87.5% { left:-75%; }\n    98.5% { left:-75%; }\n    100%  { left: 20%; }\n}\n\n@keyframes carousel{\n    0%    { left:20%; }\n    11%   { left:20%; }\n    12.5% { left:-75%; }\n    23.5% { left:-75%; }\n    25%   { left:-175%; }\n    36%   { left:-175%; }\n    37.5% { left:-275%; }\n    48.5% { left:-275%; }\n    50%   { left:-375%; }\n    61%   { left:-375%; }\n    62.5% { left:-275%; }\n    73.5% { left:-275%; }\n    75%   { left:-175%; }\n    86%   { left:-175%; }\n    87.5% { left:-75%; }\n    98.5% { left:-75%; }\n    100%  { left: 20%; }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n    <ul class=\"slides\">\n        <li *ngFor=\"let image of images\">\n            <h3>{{image.title}}</h3>\n            <p>{{image.description}}</p>\n            <p>{{image.location}}</p>\n            <p>{{image.date}}</p>\n            <img src=\"{{image.url}}\" alt=\"else\">\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/start/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderComponent = (function () {
    function SliderComponent() {
        // images data to be bound to the template
        this.images = IMAGES;
    }
    return SliderComponent;
}());
SliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-slider',
        template: __webpack_require__("../../../../../src/app/start/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/start/slider.component.css")]
    })
], SliderComponent);

// Images array implementing image interface
var IMAGES = [
    { title: 'Flowers', description: 'these are some nice flowers', location: 'Sarajevo', date: '12 februari', url: 'https://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg' },
    { title: 'Cars', description: 'these are some nice cars', location: 'Sarajevo', date: '12 februari', url: 'https://avisassets.abgemea.com/.imaging/featureImageLarge/dms/DMS/local/ZA/fleet/fleet-page/luxury-cars-feature.jpg' },
    { title: 'towers', description: 'these are some nice towers', location: 'Sarajevo', date: '12 februari', url: 'http://weburbanist.com/wp-content/uploads/2016/08/diamond-tower.jpg' },
    { title: 'City', description: 'this is a nice city', location: 'Sarajevo', date: '12 februari', url: 'http://musiccitiessummit.com/wp-content/uploads/chicago-1.jpg' },
    { title: 'Ocean', description: 'Theres alot of water', location: 'Sarajevo', date: '12 februari', url: 'https://oceanconservancy.org/wp-content/themes/oco-wp/images/header-video.jpg' },
];
//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main main_height\">\n\n\n    \n    <div class=\"main_page\">\n        <app-header></app-header>  <!-- HEADER -->\n            <div class=\"vanster\">\n                    <div class=\"container-fluid\">\n                        ETT!!!\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 margin\"></div>             \n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 center\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 col-sm-offset-1 left\">\n                                        TVÅ\n                                    </div>\n                                    <div class=\"col-md-3 col-sm-offset-1 red\">\n                                            <div class=\"row\">\n                                                    <div class=\"col-sm-4 upper\"></div>\n                                                    <div class=\"col-sm-4 blue-upper\">TRE</div>\n                                                    <div class=\"col-sm-4 green\"></div>\n                                                    <div class=\"col-sm-4 blue-lower\">FYRA</div>\n                                                    <div class=\"col-sm-4 green\"></div>\n                                            </div>\n                                    </div>\n                                </div>                            \n                            </div>            \n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 margin\"></div>             \n                        </div>\n                    </div>\n            </div>\n    </div>\n\n\n    <!-- <div class=\"col-md-6\"> -->\n        <!-- SLIDER -->\n       <!-- <app-slider></app-slider> -->\n   <!--  </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StartComponent = (function () {
    function StartComponent() {
        this.value = 12;
    }
    StartComponent.prototype.changeValue = function () {
        this.value += 1;
    };
    return StartComponent;
}());
StartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-start',
        template: __webpack_require__("../../../../../src/app/start/start.component.html"),
        styles: [__webpack_require__("../../../../../src/app/start/start.components.css")]
    })
], StartComponent);

//# sourceMappingURL=start.component.js.map

/***/ }),

/***/ "../../../../../src/app/start/start.components.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    height: 100%;\n}\n.main_page{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n\n}\n.vanster{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background-color: #f8f8f8;\n}\n\n\n.margin {\n    background-color: #f8f8f8;\n    height: 11.1vh;\n    width: 100%;\n}\n\n.center{\n    background-color: #f8f8f8;\n    height: 66.1vh;\n    width: 100%;\n}\n.left {\n    background-color:white;\n    height: 66.1vh;\n    border: solid 1px #C9C7C7; \n}\n.right{\n    background-color:white;\n    height: 66.1vh;\n}\n.blue-upper{\n    height: 25vh;\n    background-color:white;\n    border: solid 1px #C9C7C7; \n    width: 100%;\n}\n.blue-lower{\n    height: 30vh;\n    background-color:white;\n    border: solid 1px #C9C7C7; \n    width: 100%;\n}\n.upper{\n    height: 20px;\n    background-color: #f8f8f8;\n    width: 100%;\n\n}\n.green{\n    height: 40px;\n    background-color: #f8f8f8;\n    width: 100%;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../webpack/hot ^\\.\\/log$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "../../../../webpack/hot/log.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../webpack/hot ^\\.\\/log$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http://localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map