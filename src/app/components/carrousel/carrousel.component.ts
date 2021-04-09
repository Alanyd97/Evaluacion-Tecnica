import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  @Input() evolutions :string[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.evolutions);
    
  }

}