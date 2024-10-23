import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        MatCardModule,
        MatRippleModule,
        ReactiveFormsModule
    ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
