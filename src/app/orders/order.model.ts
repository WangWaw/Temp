import {productOrderList} from './productOrderList.model';


export interface Order {
    orderId:string;
    orderNo:string;
    orderTitle:string;
    orderProductList:productOrderList[];
    orderAmount:number;
    //orderDate:Date;
}