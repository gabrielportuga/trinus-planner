import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsRoadmapRoutingModule } from './tabs-roadmap-routing.module';

import { TabsRoadmapPage } from './tabs-roadmap.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsRoadmapRoutingModule
  ],
  declarations: [TabsRoadmapPage]
})
export class TabsRoadmapPageModule {}
