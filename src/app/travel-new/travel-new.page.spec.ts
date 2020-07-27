import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelNewPage } from './travel-new.page';

describe('TravelNewPage', () => {
  let component: TravelNewPage;
  let fixture: ComponentFixture<TravelNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
