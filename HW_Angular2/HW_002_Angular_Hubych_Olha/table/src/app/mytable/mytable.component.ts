import { Component, OnInit, Input, Output, EventEmitter,  ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { AddElementComponent } from '../add-element/add-element.component'
import { Table } from "./classTable";
import { ChangeDetectorRef } from '@angular/core';

const DATAS: Table[] = [
  { id: 1, name : "product 1", price : 100, category: "category 1" },
  { id: 2, name : "product 2", price : 200, category: "category 2" },
  { id: 3, name : "product 3", price : 300, category: "category 3" },
  { id: 4, name : "product 4", price : 400, category: "category 1" },
  { id: 5, name : "product 5", price : 500, category: "category 2" },
  { id: 6, name : "product 6", price : 600, category: "category 3" },
  { id: 7, name : "product 7", price : 700, category: "category 1" },
  { id: 8, name : "product 8", price : 800, category: "category 2" },
  { id: 9, name : "product 9", price : 900, category: "category 3" },
  { id: 10, name : "product 10", price : 1000, category: "category 1" }
];

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit, AfterViewChecked {
  DatasTable: Table[] = DATAS;
  WorkingArr: Table[];
  DeletedArr: Table[];
  CheckedArr: Table[];
  isNewElem: boolean = false;

  @Input('rows') curRows: number = this.DatasTable.length; 
  @Output() delete: EventEmitter<Table> = new EventEmitter();

  @ViewChild(AddElementComponent) child;
  elem: Table[];
  
  constructor(private cdRef:ChangeDetectorRef) { }

  ngAfterViewInit() {
    if(this.child.elem == undefined) {
      this.child.elem = null;
      this.cdRef.detectChanges();
    }
  }

  ngAfterViewChecked() {
    if(this.child.elem != null) {
      this.elem = this.child.elem;
      this.cdRef.detectChanges();
      console.log(this.elem);
    }
    else {
      console.log(this.child.elem);
    }
  }

  reloadTable() {
    if((this.elem != null && this.elem.every(item => !this.WorkingArr.includes(item)))) {
      this.elem.forEach(el => {
        el.id = this.WorkingArr[this.WorkingArr.length-1].id + 1;
        this.DeletedArr.push(el);
      });
      this.WorkingArr = this.DeletedArr;
      this.isNewElem = true;
    }
    else alert("Data hasn't changed");
  }

  deleteElemInfact(idRow) {
    if(this.isNewElem) {
      this.DeletedArr = this.WorkingArr;
    }
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
