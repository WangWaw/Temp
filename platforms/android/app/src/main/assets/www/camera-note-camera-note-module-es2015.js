(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-note-camera-note-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/camera-note/camera-note.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/camera-note/camera-note.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Camera Note</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n    <ion-col col-6 *ngFor=\"let photo of photoService.photos\">\n        <img [src]=\"photo.data\" />\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button (click)=\"photoService.takePicture()\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/camera-note/camera-note.module.ts":
/*!***************************************************!*\
  !*** ./src/app/camera-note/camera-note.module.ts ***!
  \***************************************************/
/*! exports provided: CameraNotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraNotePageModule", function() { return CameraNotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _camera_note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera-note.page */ "./src/app/camera-note/camera-note.page.ts");







const routes = [
    {
        path: '',
        component: _camera_note_page__WEBPACK_IMPORTED_MODULE_6__["CameraNotePage"]
    }
];
let CameraNotePageModule = class CameraNotePageModule {
};
CameraNotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_camera_note_page__WEBPACK_IMPORTED_MODULE_6__["CameraNotePage"]]
    })
], CameraNotePageModule);



/***/ }),

/***/ "./src/app/camera-note/camera-note.page.scss":
/*!***************************************************!*\
  !*** ./src/app/camera-note/camera-note.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS1ub3RlL2NhbWVyYS1ub3RlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/camera-note/camera-note.page.ts":
/*!*************************************************!*\
  !*** ./src/app/camera-note/camera-note.page.ts ***!
  \*************************************************/
/*! exports provided: CameraNotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraNotePage", function() { return CameraNotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/photo.service */ "./src/app/services/photo.service.ts");



let CameraNotePage = class CameraNotePage {
    constructor(photoService) {
        this.photoService = photoService;
    }
    ngOnInit() {
        this.photoService.loadSaved();
    }
};
CameraNotePage.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] }
];
CameraNotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-camera-note',
        template: __webpack_require__(/*! raw-loader!./camera-note.page.html */ "./node_modules/raw-loader/index.js!./src/app/camera-note/camera-note.page.html"),
        styles: [__webpack_require__(/*! ./camera-note.page.scss */ "./src/app/camera-note/camera-note.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])
], CameraNotePage);



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let PhotoService = class PhotoService {
    constructor(camera, storage) {
        this.camera = camera;
        this.storage = storage;
        this.photos = [];
    }
    takePicture() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // Add new photo to gallery
            this.photos.unshift({
                data: 'data:image/jpeg;base64,' + imageData
            });
            // Save all photos for later viewing
            this.storage.set('photos', this.photos);
        }, (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        });
    }
    loadSaved() {
        this.storage.get('photos').then((photos) => {
            this.photos = photos || [];
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], PhotoService);

class Photo {
}


/***/ })

}]);
//# sourceMappingURL=camera-note-camera-note-module-es2015.js.map