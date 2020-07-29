import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRoadmapPage } from './tabs-roadmap.page';

describe('TabsRoadmapPage', () => {
  let component: TabsRoadmapPage;
  let fixture: ComponentFixture<TabsRoadmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsRoadmapPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRoadmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
