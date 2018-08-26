import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab-square',
  templateUrl: './fab-square.component.html',
  styleUrls: ['./fab-square.component.scss']
})
export class FabSquareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message(m: string) {
    console.log(m);
  }
}
