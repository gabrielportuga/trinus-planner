import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelNewPage } from './travel-new.page';

const routes: Routes = [
  {
    path: '',
    component: TravelNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelNewPageRoutingModule {}
