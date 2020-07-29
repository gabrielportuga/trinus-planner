import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuideListPage } from './guide-list.page';

describe('GuideListPage', () => {
  let component: GuideListPage;
  let fixture: ComponentFixture<GuideListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuideListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
