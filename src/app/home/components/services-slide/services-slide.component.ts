import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation} from "swiper";
import { SwiperComponent } from "swiper/angular";
import { Swiper }from 'swiper';

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

  swiper = new Swiper('.mySwiper', {
    breakpoints:{

      900: {
        slidesPerView: 3,
      }
    }
  })
  constructor() { }

  ngOnInit(): void {
  }

}
