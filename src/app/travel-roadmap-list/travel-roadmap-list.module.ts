import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelRoadmapListPage } from './travel-roadmap-list.page';
import { TravelRoadmapListResolver } from './travel-roadmap-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: TravelRoadmapListPage,
    resolve: {
      data: TravelRoadmapListResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelRoadmapListPage],
  providers: [
    TravelRoadmapListResolver
  ]
})

export class TravelRoadmapListPageModule {}
