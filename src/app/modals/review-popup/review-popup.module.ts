import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPopupPageRoutingModule } from './review-popup-routing.module';

import { ReviewPopupPage } from './review-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewPopupPageRoutingModule
  ],
  declarations: [ReviewPopupPage]
})
export class ReviewPopupPageModule {}
