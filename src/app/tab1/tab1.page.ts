import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('slides') slides: IonSlides;
  slidesData = [];
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.slidesData = [
      {
        image: 'assets/img/pc0.png',
      },
      {
        image: 'assets/img/pc1.png',
      },
      {
        image: 'assets/img/pc2.png',
      },
      {
        image: 'assets/img/pc3.png',
      },
      {
        image: 'assets/img/pc4.png',
      },
      {
        image: 'assets/img/pc5.png',
      }
    ];
  }

  announcement =[
    {
      "title": 'WHO:',
      "description": 'All residents of San Jose Batangas',
    },
    {
      "title": 'WHAT:',
      "description": 'Rates are expected to increase by 25 centavos/cu.m. in the monthly utility bill for the first quarter of the month.',
    },
    {
      "title": 'WHEN:',
      "description": 'Effective by August, 2021',
    }
  ];

  onSlideChangeStart(event) {
  }
  page() {
    this.route.navigate(['location']);
  }
}


