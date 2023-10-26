import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { cartSummaryComponent } from './cartSummary.component';
import { cartDetail } from './cartDetail.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { CouponComponent } from './coupon.component';
import { ProductDescriptionComponent } from './productDescription.component';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
  declarations: [
    StoreComponent,
    cartSummaryComponent,
    cartDetail,
    CheckoutComponent,
    CouponComponent,
    ProductDescriptionComponent,
  ],
  exports: [
    StoreComponent,
    cartDetail,
    CheckoutComponent,
    CouponComponent,
    ProductDescriptionComponent,
  ],
})
export class StoreModule {}
