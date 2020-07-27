import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelRoadmapNewPageRoutingModule } from './travel-roadmap-new-routing.module';

import { TravelRoadmapNewPage } from './travel-roadmap-new.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TravelRoadmapNewPageRoutingModule,
    Ionic4DatepickerModule
  ],
  declarations: [TravelRoadmapNewPage]
})
export class TravelRoadmapNewPageModule {}
