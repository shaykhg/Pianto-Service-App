import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {EarningPopupPage} from '../modals/earning-popup/earning-popup.page';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {ReviewPopupPage} from '../modals/review-popup/review-popup.page';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DashboardPageRoutingModule,
        MatTabsModule,
        MatCardModule,
        MatExpansionModule,
        MatDialogModule,
        MatBottomSheetModule

    ],
  declarations: [DashboardPage],
    entryComponents: [EarningPopupPage, ReviewPopupPage],
    providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]

})
export class DashboardPageModule {}
