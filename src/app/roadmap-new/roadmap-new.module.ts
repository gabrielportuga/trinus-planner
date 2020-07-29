import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoadmapNewPageRoutingModule } from './roadmap-new-routing.module';

import { RoadmapNewPage } from './roadmap-new.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RoadmapNewPageRoutingModule,
    Ionic4DatepickerModule
  ],
  declarations: [RoadmapNewPage]
})
export class RoadmapNewPageModule {}
