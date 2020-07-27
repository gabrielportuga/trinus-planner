import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelRoadmapNewPage } from './travel-roadmap-new.page';

const routes: Routes = [
  {
    path: '',
    component: TravelRoadmapNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelRoadmapNewPageRoutingModule {}
