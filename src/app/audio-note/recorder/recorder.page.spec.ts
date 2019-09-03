import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorderPage } from './recorder.page';

describe('RecorderPage', () => {
  let component: RecorderPage;
  let fixture: ComponentFixture<RecorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
