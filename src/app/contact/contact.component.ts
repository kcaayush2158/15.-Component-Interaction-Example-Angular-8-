import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<h2>{{"hello " + parentData}}</h2><button class="btn-primary" (click)="fireEvent()">Click ME</button>',
  styles: []
})


export class ContactComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

    fireEvent(){
     this.childEvent.emit('Fire Event published'); 
    }

}
