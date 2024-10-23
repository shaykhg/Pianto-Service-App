import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarningSheetPage } from './earning-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: EarningSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarningSheetPageRoutingModule {}
