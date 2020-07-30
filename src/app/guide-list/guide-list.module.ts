import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuideListPage } from './guide-list.page';
import { GuideListResolver } from './guide-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: GuideListPage,
    resolve: {
      data: GuideListResolver
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
  declarations: [GuideListPage],
  providers: [
    GuideListResolver
  ]
})

export class GuideListPageModule {}
