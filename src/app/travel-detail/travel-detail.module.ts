import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelDetailPageRoutingModule } from './travel-detail-routing.module';

import { TravelDetailPage } from './travel-detail.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TravelDetailPageRoutingModule,
    Ionic4DatepickerModule
  ],
  declarations: [TravelDetailPage],
})
export class TravelDetailPageModule {}
