import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsSheetPage } from './details-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsSheetPageRoutingModule {}
