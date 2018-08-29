import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ast: string = 'Hello World';

  test:string;
  ngOnInit() {
  }
  getInfoFromChild(event){
    this.test = event;
  }

}
