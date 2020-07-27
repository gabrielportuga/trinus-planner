import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelNewPageRoutingModule } from './travel-new-routing.module';

import { TravelNewPage } from './travel-new.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TravelNewPageRoutingModule,
    Ionic4DatepickerModule
  ],
  declarations: [TravelNewPage],
})
export class TravelNewPageModule {}
