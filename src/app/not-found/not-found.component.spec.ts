// Title: Assignment 7.2- Template Driven and Reactive Forms
// Author: Professor Krasso
// Date: Dec 4 2022
// Modified: Detres
//Week-7 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
