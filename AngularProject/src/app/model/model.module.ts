import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { Discount } from './coupon.model';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    Discount,
    StaticDataSource,
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
  ],
})
export class ModelModule {}
