import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyItemsPageRoutingModule } from './daily-items-routing.module';

import { DailyItemsPage } from './daily-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyItemsPageRoutingModule
  ],
  declarations: [DailyItemsPage],
  entryComponents: [DailyItemsPage]
})
export class DailyItemsPageModule {}
