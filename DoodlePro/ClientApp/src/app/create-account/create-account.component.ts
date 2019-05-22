import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  @Output() userLoggedIn=new EventEmitter();
  constructor() { }

  OnUserLoggedIn() {
    console.log('test');
    this.userLoggedIn.emit();
  }
  ngOnInit() {
  }

}
