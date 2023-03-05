import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  demoData = [];
  stdName: string = '';
  stdNo: string = '';
  phoneNo: number;
  searchTerm: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.demoData = this.dataService.getData();
  }
  public onSubmit() {
    let objectData = {
      id: this.demoData.length + 1,
      stdName: this.stdName,
      stdNo: this.stdNo,
      phoneNo: this.phoneNo,
    };

    this.demoData.push(objectData);
    this.dataService.setData(this.demoData);
    this.stdName = '';
    this.stdNo = '';
    this.phoneNo = null;
    console.log(this.demoData);
  }

  public onDelete(id: any) {
    console.log(id);
    this.demoData = this.demoData.filter((ele) => ele.id !== id);
    console.log(this.demoData);
  }
}
