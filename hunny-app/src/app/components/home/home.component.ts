import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  title = 'home';
  images = {
    0: '../../../assets/images/carousel/1.jpg',
    1: '../../../assets/images/carousel/2.jpg',
    2: '../../../assets/images/carousel/3.jpg',
    3: '../../../assets/images/carousel/4.jpg'
  };

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.showNavigationArrows = false;
  }
}
