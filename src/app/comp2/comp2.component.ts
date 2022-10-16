import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon"
  clickme() {
    const service = new myservice();
    service.onclickbtn(this.title);
  }


}
