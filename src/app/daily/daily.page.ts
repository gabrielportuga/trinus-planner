import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {
  segmentModel = 'favorites';

  constructor() {}

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
