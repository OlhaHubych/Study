import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from './dataService';
import { Table } from './classTable';

//for the second variant
/*
import { DATAS } from './dataProducts';
let data = {
  getData: function() {
    return DATAS;
  }
}
*/


@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css'],
  //first variant
  providers: [DataService] 

  //second variant
  /*
  providers: [
    {
      provide: DataService,
      useValue: data
    }
  ] 
  */
})
export class MytableComponent implements OnInit {

  constructor(private dService: DataService) { }

  DatasTable = this.dService.getData();
  WorkingArr: Table[];
  DeletedArr: Table[];
  CheckedArr: Table[];

  @Input('rows') curRows: number = this.DatasTable.length; 
  @Output() delete: EventEmitter<Table> = new EventEmitter();

  deleteElemInfact(idRow) {
    for(let i = 0; i < this.DeletedArr.length; ++i){
      if (this.DeletedArr[i].id === idRow) {
        this.delete.emit(this.DeletedArr[i]);
        this.DeletedArr.splice(i, 1);
        this.WorkingArr = this.DeletedArr;
      }
    }
  }

  showCat(categoryNumber) {
    if(categoryNumber == "1") {
      this.CheckedArr = this.DeletedArr.filter(item => item.category == "category 1");
      this.WorkingArr = this.CheckedArr;
    }
    else if (categoryNumber == "2") {
      this.CheckedArr = this.DeletedArr.filter(item => item.category == "category 2");
      this.WorkingArr = this.CheckedArr;
    }
    else if(categoryNumber == "3") {
      this.CheckedArr = this.DeletedArr.filter(item => item.category == "category 3");
      this.WorkingArr = this.CheckedArr;
    }
    else {
      this.WorkingArr = this.DeletedArr;
    } 
  }

  ngOnInit(): void {
    this.DeletedArr = this.DatasTable.slice(0, this.curRows);
    this.WorkingArr = this.DeletedArr;
  }

}
