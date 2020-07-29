import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoadmapNewPage } from './roadmap-new.page';

const routes: Routes = [
  {
    path: '',
    component: RoadmapNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadmapNewPageRoutingModule {}
