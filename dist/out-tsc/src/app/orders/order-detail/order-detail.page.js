import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
let OrderDetailPage = class OrderDetailPage {
    constructor(activatedRoute, ordersService) {
        this.activatedRoute = activatedRoute;
        this.ordersService = ordersService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('orderId')) {
                //redirect
                return;
            }
            const orderId = paramMap.get('orderId');
            this.loadedOrder = this.ordersService.getOrder(orderId);
        });
    }
};
OrderDetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-order-detail',
        templateUrl: './order-detail.page.html',
        styleUrls: ['./order-detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        OrdersService])
], OrderDetailPage);
export { OrderDetailPage };
//# sourceMappingURL=order-detail.page.js.map