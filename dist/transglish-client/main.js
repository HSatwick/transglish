(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sentence_form_sentence_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sentence-form/sentence-form.component */ "./src/app/sentence-form/sentence-form.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _list_of_translations_list_of_translations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-of-translations/list-of-translations.component */ "./src/app/list-of-translations/list-of-translations.component.ts");
/* harmony import */ var _sentence_translate_detail_sentence_translate_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sentence-translate-detail/sentence-translate-detail.component */ "./src/app/sentence-translate-detail/sentence-translate-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"] },
    { path: 'new-sentence', component: _sentence_form_sentence_form_component__WEBPACK_IMPORTED_MODULE_2__["SentenceFormComponent"] },
    { path: 'list-of-sentences', component: _list_of_translations_list_of_translations_component__WEBPACK_IMPORTED_MODULE_4__["ListOfTranslationsComponent"] },
    { path: 'detail-sentence/:id', component: _sentence_translate_detail_sentence_translate_detail_component__WEBPACK_IMPORTED_MODULE_5__["SentenceTranslateDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<mat-card>\n    <mat-card>\n        <h2>TransGlish - Translating to English since 2018</h2>\n    </mat-card>\n    <router-outlet></router-outlet>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'transglish-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sentence_form_sentence_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sentence-form/sentence-form.component */ "./src/app/sentence-form/sentence-form.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _materials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./materials.module */ "./src/app/materials.module.ts");
/* harmony import */ var _list_of_translations_list_of_translations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-of-translations/list-of-translations.component */ "./src/app/list-of-translations/list-of-translations.component.ts");
/* harmony import */ var _list_of_translations_get_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-of-translations/get-list.service */ "./src/app/list-of-translations/get-list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sentence_form_translate_sentence_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sentence-form/translate-sentence.service */ "./src/app/sentence-form/translate-sentence.service.ts");
/* harmony import */ var _sentence_translate_detail_sentence_translate_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sentence-translate-detail/sentence-translate-detail.component */ "./src/app/sentence-translate-detail/sentence-translate-detail.component.ts");
/* harmony import */ var _pipes_WordTruncate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/WordTruncate */ "./src/app/pipes/WordTruncate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sentence_form_sentence_form_component__WEBPACK_IMPORTED_MODULE_6__["SentenceFormComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _list_of_translations_list_of_translations_component__WEBPACK_IMPORTED_MODULE_9__["ListOfTranslationsComponent"],
                _sentence_translate_detail_sentence_translate_detail_component__WEBPACK_IMPORTED_MODULE_13__["SentenceTranslateDetailComponent"],
                _pipes_WordTruncate__WEBPACK_IMPORTED_MODULE_14__["WordTruncate"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _materials_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [
                _list_of_translations_get_list_service__WEBPACK_IMPORTED_MODULE_10__["GetListService"],
                _sentence_form_translate_sentence_service__WEBPACK_IMPORTED_MODULE_12__["TranslateSentenceService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list-of-translations/get-list.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/list-of-translations/get-list.service.ts ***!
  \**********************************************************/
/*! exports provided: GetListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetListService", function() { return GetListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetListService = /** @class */ (function () {
    function GetListService(http) {
        this.http = http;
        this.base = "http://localhost:8000";
        this.httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    GetListService.prototype.getAllTranslations = function () {
        return this.http.get(this.base + "/sentence/", { headers: this.httpHeader });
    };
    GetListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetListService);
    return GetListService;
}());



/***/ }),

/***/ "./src/app/list-of-translations/list-of-translations.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/list-of-translations/list-of-translations.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.card-size {\r\n    height: 550px;\r\n}\r\n\r\n.word-wrap{\r\n    white-space: pre-line;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1vZi10cmFuc2xhdGlvbnMvbGlzdC1vZi10cmFuc2xhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9saXN0LW9mLXRyYW5zbGF0aW9ucy9saXN0LW9mLXRyYW5zbGF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLXNpemUge1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuLndvcmQtd3JhcHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/list-of-translations/list-of-translations.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/list-of-translations/list-of-translations.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-size\">\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> <b>ID</b> </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <a routerLink=\"/detail-sentence/{{element.id}}\" mat-mini-fab>{{element.id}} </a>\n          </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"orig_sent\">\n          <th mat-header-cell *matHeaderCellDef> <b>Original Sentence</b> </th>\n          <td mat-cell *matCellDef=\"let element\" class=\"word-wrap\"> \n            {{element.original_sentc | wordCount:30 }} \n          </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"lang\">\n          <th mat-header-cell *matHeaderCellDef> <b>Language</b> </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.language}} </td>\n        </ng-container>\n          \n        <ng-container matColumnDef=\"eng_trs\">\n          <th mat-header-cell *matHeaderCellDef> <b>English Translation</b> </th>\n          <td mat-cell *matCellDef=\"let element\" class=\"word-wrap\"> {{element.english_sentc | wordCount:30 }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"created\">\n          <th mat-header-cell *matHeaderCellDef> <b>Created</b> </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.created | date}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"></tr>\n      </table>\n</div>"

/***/ }),

/***/ "./src/app/list-of-translations/list-of-translations.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/list-of-translations/list-of-translations.component.ts ***!
  \************************************************************************/
/*! exports provided: ListOfTranslationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfTranslationsComponent", function() { return ListOfTranslationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-list.service */ "./src/app/list-of-translations/get-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListOfTranslationsComponent = /** @class */ (function () {
    function ListOfTranslationsComponent(translationService) {
        this.translationService = translationService;
        this.displayedColumns = ['id', 'orig_sent', 'lang', 'eng_trs', 'created'];
        this.data = [];
        this.resultsLength = 0;
    }
    ListOfTranslationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translationService.getAllTranslations().subscribe(function (data) {
            _this.resultsLength = data.length;
            _this.data = data;
        }, function (error) {
            console.log(error);
        });
    };
    ListOfTranslationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-of-translations',
            template: __webpack_require__(/*! ./list-of-translations.component.html */ "./src/app/list-of-translations/list-of-translations.component.html"),
            styles: [__webpack_require__(/*! ./list-of-translations.component.css */ "./src/app/list-of-translations/list-of-translations.component.css")]
        }),
        __metadata("design:paramtypes", [_get_list_service__WEBPACK_IMPORTED_MODULE_1__["GetListService"]])
    ], ListOfTranslationsComponent);
    return ListOfTranslationsComponent;
}());



/***/ }),

/***/ "./src/app/materials.module.ts":
/*!*************************************!*\
  !*** ./src/app/materials.module.ts ***!
  \*************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-custom {\r\n    background-color: rgb(39, 36, 36);\r\n    color: white;\r\n    height: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgMzYsIDM2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n    <a mat-stroked-button routerLink=\"new-sentence\" color=\"accent\">New Sentence</a>\n</mat-card>\n<mat-tab-group mat-align-tabs=\"center\" class=\"tab-custom\">\n  <mat-tab label=\"List of Translations\"> \n    <app-list-of-translations></app-list-of-translations>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/WordTruncate.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/WordTruncate.ts ***!
  \***************************************/
/*! exports provided: WordTruncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordTruncate", function() { return WordTruncate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WordTruncate = /** @class */ (function () {
    function WordTruncate() {
    }
    WordTruncate.prototype.transform = function (value, arg) {
        var limit = arg ? parseInt(arg, 10) : 10;
        var trails = "....";
        return value.length > limit ? value.substring(0, limit) + trails : value;
    };
    WordTruncate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'wordCount'
        })
    ], WordTruncate);
    return WordTruncate;
}());



/***/ }),

/***/ "./src/app/sentence-form/sentence-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sentence-form/sentence-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sentence-container > * {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VudGVuY2UtZm9ybS9zZW50ZW5jZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZW50ZW5jZS1mb3JtL3NlbnRlbmNlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZW50ZW5jZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sentence-form/sentence-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/sentence-form/sentence-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-card\">\n  <form (ngSubmit)=\"translate_sentence()\" #sentenceForm=\"ngForm\">\n    <span class=\"mat-card-title\">Enter the Sentence you want to trasnlate into English</span>\n    <div *ngIf=\"enpty_string_flag\">\n        <mat-chip-list>\n          <mat-chip color=\"warn\" selected [removable]=\"removable\">Cannot have empty string\n              <mat-icon matChipRemove *ngIf=\"removable\" (click)=\"remove_chip()\">cancel</mat-icon>\n          </mat-chip>\n        </mat-chip-list>\n    </div>\n    <div class=\"sentence-container\">\n        <mat-form-field>  \n            <textarea matInput placeholder=\"Textarea\" \n              maxlength=\"1000\"\n              [(ngModel)]=\"sentence.original_sentc\" \n              #original_sentc = \"ngModel\"\n              name=\"original_sentc\"\n              id=\"original_sentc\"\n              required></textarea>\n          </mat-form-field>\n    </div>\n    <button mat-stroked-button color=\"accent\" type=\"submit\" [disabled]=\"!sentenceForm.form.valid\">Submit</button>\n    <a routerLink=\"/\" mat-button color=\"warn\">Back</a>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/sentence-form/sentence-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sentence-form/sentence-form.component.ts ***!
  \**********************************************************/
/*! exports provided: SentenceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceFormComponent", function() { return SentenceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_sentence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate-sentence.service */ "./src/app/sentence-form/translate-sentence.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SentenceFormComponent = /** @class */ (function () {
    function SentenceFormComponent(translateSentenceService, router, loc) {
        this.translateSentenceService = translateSentenceService;
        this.router = router;
        this.loc = loc;
        this.removable = true;
        this.sentence = {
            original_sentc: ''
        };
    }
    SentenceFormComponent.prototype.ngOnInit = function () {
    };
    SentenceFormComponent.prototype.remove_chip = function () {
        this.enpty_string_flag = false;
        this.sentence.original_sentc = '';
    };
    SentenceFormComponent.prototype.navigate = function () {
        this.router.navigate(['']);
    };
    SentenceFormComponent.prototype.translate_sentence = function () {
        var _this = this;
        if (this.sentence.original_sentc.trim().length == 0) {
            this.enpty_string_flag = true;
            return;
        }
        else {
            this.translateSentenceService.translate_sentence(this.sentence).subscribe(function (data) {
                _this.navigate();
            });
        }
    };
    SentenceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sentence-form',
            template: __webpack_require__(/*! ./sentence-form.component.html */ "./src/app/sentence-form/sentence-form.component.html"),
            styles: [__webpack_require__(/*! ./sentence-form.component.css */ "./src/app/sentence-form/sentence-form.component.css")]
        }),
        __metadata("design:paramtypes", [_translate_sentence_service__WEBPACK_IMPORTED_MODULE_1__["TranslateSentenceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SentenceFormComponent);
    return SentenceFormComponent;
}());



/***/ }),

/***/ "./src/app/sentence-form/translate-sentence.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/sentence-form/translate-sentence.service.ts ***!
  \*************************************************************/
/*! exports provided: TranslateSentenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateSentenceService", function() { return TranslateSentenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateSentenceService = /** @class */ (function () {
    function TranslateSentenceService(http) {
        this.http = http;
        this.base = "http://localhost:8000";
        this.httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    TranslateSentenceService.prototype.translate_sentence = function (sentence) {
        return this.http.post(this.base + '/sentence/', sentence, { headers: this.httpHeader });
    };
    TranslateSentenceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TranslateSentenceService);
    return TranslateSentenceService;
}());



/***/ }),

/***/ "./src/app/sentence-translate-detail/detail-service.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sentence-translate-detail/detail-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: DetailServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailServiceService", function() { return DetailServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailServiceService = /** @class */ (function () {
    function DetailServiceService(http) {
        this.http = http;
        this.base = "http://localhost:8000";
        this.httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    DetailServiceService.prototype.getTrasnlation = function (id) {
        return this.http.get(this.base + '/sentence/' + id, { headers: this.httpHeader });
    };
    DetailServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DetailServiceService);
    return DetailServiceService;
}());



/***/ }),

/***/ "./src/app/sentence-translate-detail/sentence-translate-detail.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/sentence-translate-detail/sentence-translate-detail.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-text{\r\n    white-space: pre-line;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VudGVuY2UtdHJhbnNsYXRlLWRldGFpbC9zZW50ZW5jZS10cmFuc2xhdGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9zZW50ZW5jZS10cmFuc2xhdGUtZGV0YWlsL3NlbnRlbmNlLXRyYW5zbGF0ZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwLXRleHR7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sentence-translate-detail/sentence-translate-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/sentence-translate-detail/sentence-translate-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card>\n    <h2>Original Sentence</h2>\n    <br>\n    <p class=\"wrap-text\">{{sentence.original_sentc}}</p>\n  </mat-card>\n  <hr>\n  <mat-card>\n    <h2>Language of Origin</h2>\n    <p class=\"wrap-text\">{{sentence.language}}</p>\n  </mat-card>\n  <hr>\n  <mat-card>\n    <h2>English Translation</h2>\n    <p class=\"wrap-text\">{{sentence.english_sentc}}</p>\n  </mat-card>\n  <br>\n  <a mat-button color=\"warn\" routerLink=\"/\">Home</a>\n</mat-card>"

/***/ }),

/***/ "./src/app/sentence-translate-detail/sentence-translate-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sentence-translate-detail/sentence-translate-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SentenceTranslateDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceTranslateDetailComponent", function() { return SentenceTranslateDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-service.service */ "./src/app/sentence-translate-detail/detail-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SentenceTranslateDetailComponent = /** @class */ (function () {
    function SentenceTranslateDetailComponent(router, detailTranslation) {
        this.router = router;
        this.detailTranslation = detailTranslation;
        this.sentence = {
            original_sentc: '',
            language: '',
            english_sentc: '',
        };
    }
    SentenceTranslateDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.router.snapshot.paramMap.get('id');
        this.detailTranslation.getTrasnlation(id).subscribe(function (data) {
            _this.sentence = data[0];
            console.log(data[0]);
        });
    };
    SentenceTranslateDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sentence-translate-detail',
            template: __webpack_require__(/*! ./sentence-translate-detail.component.html */ "./src/app/sentence-translate-detail/sentence-translate-detail.component.html"),
            styles: [__webpack_require__(/*! ./sentence-translate-detail.component.css */ "./src/app/sentence-translate-detail/sentence-translate-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _detail_service_service__WEBPACK_IMPORTED_MODULE_2__["DetailServiceService"]])
    ], SentenceTranslateDetailComponent);
    return SentenceTranslateDetailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Django-Angular-Projects\Transglish\transglish-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map