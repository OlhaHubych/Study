import { Component, OnInit } from '@angular/core';
import { Table } from '../mytable/classTable';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})

export class AddElementComponent implements OnInit {
  eID: number = 0;
  eName: string;
  ePrice: number;
  eCateg: string;
  newElement: Table[];
  elem = null;

  constructor() { }

  ngOnInit(): void {
  }

  addIntoTable() {
    let patternName = /\w+/;
    let patternPrice = /^\d+$/;
    let patternCateg = /^\D+\s?\d+$/;

    if((this.eName == undefined) || (this.eCateg == undefined) || (this.ePrice == null) || this.ePrice == undefined) {
      console.log(this.eName);
      console.log(this.ePrice);
      console.log(this.eCateg);
      alert("None of the fields can be empty. Please fill in all the fields.");
    }
    else if((this.eName.search(patternName) == -1) || (this.eCateg.search(patternCateg) == -1) || (String(this.ePrice).search(patternPrice) == -1)) {
      alert("Wrong information in the form. Please check it.");
    }
    else {
      this.newElement = [
        {id: this.eID, name: this.eName, price: this.ePrice, category: this.eCateg}
      ];
      this.elem = this.newElement;
      alert("Product is added into the table. Please reload the table to see changes.");
    }
  }
}