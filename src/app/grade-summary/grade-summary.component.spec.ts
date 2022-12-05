// Title: Assignment 7.2- Template Driven and Reactive Forms
// Author: Professor Krasso
// Date: Dec 4 2022
// Modified: Detres
//Week-7 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSummaryComponent } from './grade-summary.component';

describe('GradeSummaryComponent', () => {
  let component: GradeSummaryComponent;
  let fixture: ComponentFixture<GradeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradeSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GradeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
