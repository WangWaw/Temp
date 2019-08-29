(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-order-detail-order-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/order-detail/order-detail.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/order-detail/order-detail.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"new\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/orders\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{ loadedOrder.orderTitle }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h1 text-center>{{ loadedOrder.orderTitle }}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list *ngFor=\"let pr of loadedOrder.orderProductList\">\n          <ion-label slot=\"start\">{{ pr.ProductName }}</ion-label>\n          <ion-label slot=\"end\">{{ pr.ProductQuantity }}</ion-label>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/orders/order-detail/order-detail.module.ts":
/*!************************************************************!*\
  !*** ./src/app/orders/order-detail/order-detail.module.ts ***!
  \************************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/orders/order-detail/order-detail.page.ts");







var routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]
    }
];
var OrderDetailPageModule = /** @class */ (function () {
    function OrderDetailPageModule() {
    }
    OrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
        })
    ], OrderDetailPageModule);
    return OrderDetailPageModule;
}());



/***/ }),

/***/ "./src/app/orders/order-detail/order-detail.page.scss":
/*!************************************************************!*\
  !*** ./src/app/orders/order-detail/order-detail.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1kZXRhaWwvb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/order-detail/order-detail.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/orders/order-detail/order-detail.page.ts ***!
  \**********************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");




var OrderDetailPage = /** @class */ (function () {
    function OrderDetailPage(activatedRoute, ordersService) {
        this.activatedRoute = activatedRoute;
        this.ordersService = ordersService;
    }
    OrderDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('orderId')) {
                //redirect
                return;
            }
            var orderId = paramMap.get('orderId');
            _this.loadedOrder = _this.ordersService.getOrder(orderId);
        });
    };
    OrderDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] }
    ]; };
    OrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! raw-loader!./order-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/orders/order-detail/order-detail.page.html"),
            styles: [__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/orders/order-detail/order-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=orders-order-detail-order-detail-module-es5.js.map