import { Component } from "@angular/core";

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