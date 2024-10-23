import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTimeSheetPageRoutingModule } from './add-time-sheet-routing.module';

import { AddTimeSheetPage } from './add-time-sheet.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddTimeSheetPageRoutingModule,
        NgxMaterialTimepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatButtonModule,
    ],
  declarations: [AddTimeSheetPage]
})
export class AddTimeSheetPageModule {}
