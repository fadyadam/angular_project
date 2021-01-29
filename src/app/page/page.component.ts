
import {Component,OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
  
})
export class PageComponent implements OnInit {
  page = {
    title: 'Eligibility Calculator',
    subtitle: 'Simple!',
    content: 'Some home content.',
    image: 'assets/circle.svg',
    image2 : 'assets/logo.png'
  };
 
  constructor() { }

  ngOnInit(){
  }

}
export class SliderFormattingExample {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
