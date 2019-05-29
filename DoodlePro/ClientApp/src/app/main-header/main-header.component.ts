import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor() { }
  showLoadingBar=false;
  isFullScreen() {
    return screenfull.isFullscreen;
  }

  ngOnInit() {
  }

}
