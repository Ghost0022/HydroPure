import { Component} from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage  {

  constructor() { }

  location: any[] = [
    { title: 'Located @ Municipal Compound, Barangay 7, San Jose, Batangas 5100', image: './assets/img/loc1.jpg' },
    { title: 'Landmark: Municipal Hall', image: './assets/img/loc3.jpg' },
    { title: 'Landmark: Municipal Hall', image: './assets/img/loc4.jpg' }
    
  ];

}
