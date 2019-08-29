import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  loadedOrder: Order;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private ordersService: OrdersService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('orderId')){
        //redirect
        return;
      }
      const orderId = paramMap.get('orderId');
      this.loadedOrder = this.ordersService.getOrder(orderId);
    });
  }

}
