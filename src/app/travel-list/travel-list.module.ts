import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelListPage } from './travel-list.page';
import { TravelListResolver } from './travel-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: TravelListPage,
    resolve: {
      data: TravelListResolver
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
  declarations: [TravelListPage],
  providers: [
    TravelListResolver
  ]
})

export class TravelListPageModule {}
