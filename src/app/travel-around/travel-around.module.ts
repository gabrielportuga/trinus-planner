import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelAroundPage } from './travel-around.page';
import { TravelAroundResolver } from './travel-around.resolver';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TravelAroundPage,
    resolve: {
      data: TravelAroundResolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TravelAroundPage],
  providers: [TravelAroundResolver],
})
export class TravelAroundPageModule {}
