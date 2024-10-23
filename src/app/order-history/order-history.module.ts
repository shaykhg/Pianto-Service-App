import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryPageRoutingModule } from './order-history-routing.module';

import { OrderHistoryPage } from './order-history.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderHistoryPageRoutingModule,
        MatCardModule
    ],
    exports: [
        OrderHistoryPage
    ],
    declarations: [OrderHistoryPage]
})
export class OrderHistoryPageModule {}
