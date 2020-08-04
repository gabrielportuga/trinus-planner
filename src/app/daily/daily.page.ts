import { Component, OnInit } from '@angular/core';
import { DailyActivityPage } from './../daily-activity/daily-activity.page';
import { DailyItemsPage } from './../daily-items/daily-items.page';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {
  dailyItemsPage = DailyItemsPage;
  dailyActivityPage = DailyActivityPage;

  constructor() {}

  ngOnInit() {}
}
