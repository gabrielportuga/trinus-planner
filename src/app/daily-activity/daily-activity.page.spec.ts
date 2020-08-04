import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyActivityPage } from './daily-activity.page';

describe('DailyActivityPage', () => {
  let component: DailyActivityPage;
  let fixture: ComponentFixture<DailyActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
