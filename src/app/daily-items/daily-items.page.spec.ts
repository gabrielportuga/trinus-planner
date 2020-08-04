import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyItemsPage } from './daily-items.page';

describe('DailyItemsPage', () => {
  let component: DailyItemsPage;
  let fixture: ComponentFixture<DailyItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
