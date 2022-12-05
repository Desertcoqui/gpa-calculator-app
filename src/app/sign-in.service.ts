// Title: Assignment 7.2- Template Driven and Reactive Forms
// Author: Professor Krasso
// Date: Dec 4 2022
// Modified: Detres
//Week-7 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  //variable studentsID type array number
  studentIds: Array<number>;
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }
  // iterates over studentsID array and returns true if there is a match
  validate(studentIds: number) {
    return this.studentIds.some((id) => id === studentIds);
  }
}
