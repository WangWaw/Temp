(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["audio-note-recorder-recorder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/audio-note/recorder/recorder.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/audio-note/recorder/recorder.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Recorder</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" padding=500px>\n    <ion-fab-button (click)=\"recordService.startRecord()\" *ngIf=\"!recordService.recording\" color=\"light\">\n      <ion-icon color=\"danger\" name=\"mic\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" padding=500px>\n    <ion-fab-button (click)=\"recordService.stopRecord()\" *ngIf=\"recordService.recording\" color=\"light\">\n      <ion-icon color=\"danger\" name=\"square\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n    <!-- <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        <button ion-button primary (click)=\"stopRecord()\" *ngIf=\"recording\">\n          <ion-icon name=\"mic-off\"></ion-icon>&nbsp;&nbsp;Stop Record\n        </button>\n        <button ion-button primary (click)=\"startRecord()\" *ngIf=\"!recording\">\n          <ion-icon name=\"mic\"></ion-icon>&nbsp;&nbsp;Start Record\n        </button>\n      </ion-card-title>\n    </ion-card-content>\n  </ion-card> -->\n  <ion-list >\n      <ion-item *ngFor=\"let audio of recordService.audioList; index as i;\" expand=\"block\">\n        <p>{{audio.filename}}</p>\n        <button slot=\"end\" ion-button clear item-end large (click)=\"recordService.playAudio(audio.filename, i)\">\n          <ion-icon name=\"play\"></ion-icon>\n        </button>\n        <p>{{audio.fileDuration}}</p>\n      </ion-item>\n    </ion-list>\n    <p>clock</p>\n    <p *ngIf=\"recordService.recording\">Recording</p>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/audio-note/recorder/recorder.module.ts":
/*!********************************************************!*\
  !*** ./src/app/audio-note/recorder/recorder.module.ts ***!
  \********************************************************/
/*! exports provided: RecorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecorderPageModule", function() { return RecorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recorder.page */ "./src/app/audio-note/recorder/recorder.page.ts");







var routes = [
    {
        path: '',
        component: _recorder_page__WEBPACK_IMPORTED_MODULE_6__["RecorderPage"]
    }
];
var RecorderPageModule = /** @class */ (function () {
    function RecorderPageModule() {
    }
    RecorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recorder_page__WEBPACK_IMPORTED_MODULE_6__["RecorderPage"]]
        })
    ], RecorderPageModule);
    return RecorderPageModule;
}());



/***/ }),

/***/ "./src/app/audio-note/recorder/recorder.page.scss":
/*!********************************************************!*\
  !*** ./src/app/audio-note/recorder/recorder.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLW5vdGUvcmVjb3JkZXIvcmVjb3JkZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/audio-note/recorder/recorder.page.ts":
/*!******************************************************!*\
  !*** ./src/app/audio-note/recorder/recorder.page.ts ***!
  \******************************************************/
/*! exports provided: RecorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecorderPage", function() { return RecorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/record.service */ "./src/app/services/record.service.ts");



var RecorderPage = /** @class */ (function () {
    function RecorderPage(recordService) {
        this.recordService = recordService;
    }
    // ionViewWillEnter() {
    //   this.getAudioList();
    // }
    RecorderPage.prototype.ngoninit = function () {
        this.recordService.getAudioList();
    };
    RecorderPage.ctorParameters = function () { return [
        { type: src_app_services_record_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"] }
    ]; };
    RecorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recorder',
            template: __webpack_require__(/*! raw-loader!./recorder.page.html */ "./node_modules/raw-loader/index.js!./src/app/audio-note/recorder/recorder.page.html"),
            styles: [__webpack_require__(/*! ./recorder.page.scss */ "./src/app/audio-note/recorder/recorder.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_record_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"]])
    ], RecorderPage);
    return RecorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=audio-note-recorder-recorder-module-es5.js.map