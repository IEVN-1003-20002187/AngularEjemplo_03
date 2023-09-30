import { Component } from '@angular/core';

@Component({
  selector: 'app-suma2',
  templateUrl: './suma2.component.html',
  styleUrls: ['./suma2.component.css']
})
export class Suma2Component {
  num1:number =  0;
  num2: number = 0;
  res: number  = 0;

  sumar() {
    this.res = this.num1 + this.num2;
  }


}
