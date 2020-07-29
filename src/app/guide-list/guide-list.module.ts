import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideListPageRoutingModule } from './guide-list-routing.module';

import { GuideListPage } from './guide-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideListPageRoutingModule
  ],
  declarations: [GuideListPage]
})
export class GuideListPageModule {}
