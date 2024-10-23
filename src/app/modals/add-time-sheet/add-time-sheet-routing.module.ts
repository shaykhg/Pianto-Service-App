import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTimeSheetPage } from './add-time-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: AddTimeSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTimeSheetPageRoutingModule {}
