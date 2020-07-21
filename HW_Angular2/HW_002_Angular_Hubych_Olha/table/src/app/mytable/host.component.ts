import { Component } from "@angular/core";
import { Table } from './classTable';
import { MytableComponent } from './mytable.component'


@Component({
    selector: "host",
    templateUrl: "host.component.html"
})
export class HostComponent{ 
    showDeletedElem(rowObj) {
        console.log("Deleted obj:");
        console.dir(rowObj);
    }
}