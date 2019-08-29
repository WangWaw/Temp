(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/orders.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/orders.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header translucent>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Order List</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let order of orders\" [routerLink]=\"['./',order.orderId]\">\n        <ion-label>\n          {{ order.orderTitle }}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-app>"

/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");







const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/orders/orders.page.scss":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/orders/orders.page.ts":
/*!***************************************!*\
  !*** ./src/app/orders/orders.page.ts ***!
  \***************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.service */ "./src/app/orders/orders.service.ts");



let OrdersPage = class OrdersPage {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    ngOnInit() {
        this.orders = this.ordersService.getAllOrders();
    }
};
OrdersPage.ctorParameters = () => [
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }
];
OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/orders/orders.page.html"),
        styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/orders/orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map