import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let OrdersService = class OrdersService {
    constructor() {
        this.orders = [
            {
                orderId: '1',
                orderNo: 'NA283648',
                orderTitle: 'NA Order1',
                orderProductList: [{
                        ProductNo: '1',
                        ProductName: 'p1',
                        ProductQuantity: 1,
                        ProductPrice: 1
                    }, {
                        ProductNo: '2',
                        ProductName: 'p2',
                        ProductQuantity: 1,
                        ProductPrice: 1
                    }
                ],
                orderAmount: 2
                //,orderDate: format('YYYY MM DD', '2019/01/01')
            },
            {
                orderId: '2',
                orderNo: 'NA283666',
                orderTitle: 'NA Order2',
                orderProductList: [{
                        ProductNo: '1',
                        ProductName: 'p1',
                        ProductQuantity: 1,
                        ProductPrice: 1
                    }],
                orderAmount: 1
                //,orderDate: format('YYYY MM DD', '2019/01/02')
            }
        ];
    }
    getAllOrders() {
        return [...this.orders];
    }
    getOrder(orderId) {
        return Object.assign({}, this.orders.find(order => {
            return order.orderId === orderId;
        }));
    }
};
OrdersService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], OrdersService);
export { OrdersService };
//# sourceMappingURL=orders.service.js.map