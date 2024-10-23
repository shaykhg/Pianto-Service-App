import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayoutMethodPage } from './payout-method.page';

const routes: Routes = [
  {
    path: '',
    component: PayoutMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutMethodPageRoutingModule {}
