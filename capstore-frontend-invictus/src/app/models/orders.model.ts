import { Transaction } from './transaction.model';
import { Customer } from './customer.model';
import { address } from './address.model';
import { Product } from './product.model';

export class Order{
     orderId:number;
     orderAmount:number;
     orderStatus:string;
     orderDate:string;
     statusDate:Date;
     transaction:Transaction;
     address:address;
     customer:Customer;
     product:Product;
     quantity:number;

}