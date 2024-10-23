import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewPopupPage } from './review-popup.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewPopupPageRoutingModule {}
