import { Component, OnInit } from '@angular/core';
import { Swiper }from 'swiper';
import SwiperCore, { Pagination, Navigation} from "swiper";

SwiperCore.use([
  Navigation,
  Pagination,
]);

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
