import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation} from "swiper";
import { SwiperComponent } from "swiper/angular";


SwiperCore.use([
  Navigation,
  Pagination,
]);

@Component({
  selector: 'app-services-slide',
  templateUrl: './services-slide.component.html',
  styleUrls: ['./services-slide.component.css']
})
export class ServicesSlideComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
