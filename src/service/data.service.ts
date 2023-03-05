import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private demoData: any[];

  constructor() {
    this.demoData = [];
  }

  getData() {
    return this.demoData;
  }

  setData(newData) {
    this.demoData = newData;
  }
}
