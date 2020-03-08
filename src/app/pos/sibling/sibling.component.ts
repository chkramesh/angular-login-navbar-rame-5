import { Component, OnInit } from '@angular/core';
import { MyDataService } from "../service/my-data.service";

@Component({
    selector: 'app-sibling',
    template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `,
    styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

    message: string;

    constructor(private myDataService: MyDataService) { }

    ngOnInit() {
        this.myDataService.currentMessage.subscribe(message => this.message = message)
    }

    newMessage() {
        this.myDataService.changeMessage("Hello from Sibling")
    }

}


/*
@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
