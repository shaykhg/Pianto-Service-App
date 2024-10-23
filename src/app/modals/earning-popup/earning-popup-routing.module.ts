import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarningPopupPage } from './earning-popup.page';

const routes: Routes = [
  {
    path: '',
    component: EarningPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarningPopupPageRoutingModule {}
