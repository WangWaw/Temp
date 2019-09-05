import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrdersService } from './orders.service';
let OrdersPage = class OrdersPage {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    ngOnInit() {
        this.orders = this.ordersService.getAllOrders();
    }
};
OrdersPage = tslib_1.__decorate([
    Component({
        selector: 'app-orders',
        templateUrl: './orders.page.html',
        styleUrls: ['./orders.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [OrdersService])
], OrdersPage);
export { OrdersPage };
//# sourceMappingURL=orders.page.js.map