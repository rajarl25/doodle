import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn: boolean = false;

  OnUserLoggedIn() {

    console.log('test');

    this.isLoggedIn = true;
    console.log('logged In Successfully-1');
    console.log('logged In Successfully-2');
  }
}
