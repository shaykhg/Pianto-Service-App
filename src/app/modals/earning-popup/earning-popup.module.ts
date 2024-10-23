import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarningPopupPageRoutingModule } from './earning-popup-routing.module';

import { EarningPopupPage } from './earning-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarningPopupPageRoutingModule
  ],
  declarations: [EarningPopupPage],
})
export class EarningPopupPageModule {}
