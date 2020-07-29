import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoadmapListPage } from './roadmap-list.page';
import { RoadmapListResolver } from './roadmap-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: RoadmapListPage,
    resolve: {
      data: RoadmapListResolver
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
  declarations: [RoadmapListPage],
  providers: [
    RoadmapListResolver
  ]
})

export class RoadmapListPageModule {}
