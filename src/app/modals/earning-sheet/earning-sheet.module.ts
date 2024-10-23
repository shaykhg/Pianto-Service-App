import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarningSheetPageRoutingModule } from './earning-sheet-routing.module';

import { EarningSheetPage } from './earning-sheet.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EarningSheetPageRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
  declarations: [EarningSheetPage]
})
export class EarningSheetPageModule {}
