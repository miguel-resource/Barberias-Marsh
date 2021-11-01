import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

SwiperCore.use([
  EffectCoverflow, Pagination
]);
@Component({
  selector: 'app-slide-pictures',
  templateUrl: './slide-pictures.component.html',
  styleUrls: ['./slide-pictures.component.css']
})
export class SlidePicturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
