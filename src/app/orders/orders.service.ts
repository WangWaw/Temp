import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[] = [
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
  ]

  constructor() { }

  getAllOrders() {
    return [...this.orders];
  }

  getOrder(orderId: string) {
    return {
      ...this.orders.find(order => {
        return order.orderId === orderId;
      })
    };
  }
}
