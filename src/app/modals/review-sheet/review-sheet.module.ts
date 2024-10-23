import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewSheetPageRoutingModule } from './review-sheet-routing.module';

import { ReviewSheetPage } from './review-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewSheetPageRoutingModule
  ],
  declarations: [ReviewSheetPage]
})
export class ReviewSheetPageModule {}
