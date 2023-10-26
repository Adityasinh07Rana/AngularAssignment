import { Component } from '@angular/core';
import { Discount } from '../model/coupon.model';

@Component({
  selector: 'coupon',
  templateUrl: 'coupon.component.html',
})
export class CouponComponent {
  constructor(private discount: Discount) {}
  successMessageVisible = false;

  showSuccessMessage() {
    this.successMessageVisible = true;
  }
  applyCoupon() {
    this.discount.CheckDiscount();
  }
}
