import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCards } from "swiper";
SwiperCore.use([EffectCards]);
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
