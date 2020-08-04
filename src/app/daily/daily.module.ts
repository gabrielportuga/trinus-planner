import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyPageRoutingModule } from './daily-routing.module';

import { DailyPage } from './daily.page';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { DailyItemsPageModule } from '../daily-items/daily-items.module';
import { DailyActivityPageModule } from './../daily-activity/daily-activity.module';

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    DailyPageRoutingModule,
    SuperTabsModule,
    DailyActivityPageModule,
    DailyItemsPageModule
  ],
  declarations: [DailyPage]
})
export class DailyPageModule {}
