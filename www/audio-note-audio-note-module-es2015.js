(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["audio-note-audio-note-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/audio-note/audio-note.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/audio-note/audio-note.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Audio Note</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"orange\" expand=\"block\">\n          <ion-icon slot=\"start\" name=\"add\"></ion-icon>Recorder\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"orange\" expand=\"block\">\n          <ion-icon slot=\"start\" name=\"add\"></ion-icon>Transcription\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-searchbar></ion-searchbar>\n    </ion-row>\n    <ion-row>\n      <ion-list>\n\n      </ion-list>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/audio-note/audio-note.module.ts":
/*!*************************************************!*\
  !*** ./src/app/audio-note/audio-note.module.ts ***!
  \*************************************************/
/*! exports provided: AudioNotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioNotePageModule", function() { return AudioNotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _audio_note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio-note.page */ "./src/app/audio-note/audio-note.page.ts");







const routes = [
    {
        path: '',
        component: _audio_note_page__WEBPACK_IMPORTED_MODULE_6__["AudioNotePage"]
    }
];
let AudioNotePageModule = class AudioNotePageModule {
};
AudioNotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_audio_note_page__WEBPACK_IMPORTED_MODULE_6__["AudioNotePage"]]
    })
], AudioNotePageModule);



/***/ }),

/***/ "./src/app/audio-note/audio-note.page.scss":
/*!*************************************************!*\
  !*** ./src/app/audio-note/audio-note.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLW5vdGUvYXVkaW8tbm90ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/audio-note/audio-note.page.ts":
/*!***********************************************!*\
  !*** ./src/app/audio-note/audio-note.page.ts ***!
  \***********************************************/
/*! exports provided: AudioNotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioNotePage", function() { return AudioNotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AudioNotePage = class AudioNotePage {
    constructor() { }
    ngOnInit() {
    }
};
AudioNotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audio-note',
        template: __webpack_require__(/*! raw-loader!./audio-note.page.html */ "./node_modules/raw-loader/index.js!./src/app/audio-note/audio-note.page.html"),
        styles: [__webpack_require__(/*! ./audio-note.page.scss */ "./src/app/audio-note/audio-note.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AudioNotePage);



/***/ })

}]);
//# sourceMappingURL=audio-note-audio-note-module-es2015.js.map