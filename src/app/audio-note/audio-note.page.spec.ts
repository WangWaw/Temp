import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioNotePage } from './audio-note.page';

describe('AudioNotePage', () => {
  let component: AudioNotePage;
  let fixture: ComponentFixture<AudioNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioNotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
