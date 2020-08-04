import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyItemsPage } from './daily-items.page';

const routes: Routes = [
  {
    path: '',
    component: DailyItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyItemsPageRoutingModule {}
