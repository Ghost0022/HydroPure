import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage{

  constructor() { }

  media: any[] = [
    { title: 'HydroPure Official', image: './assets/img/fb.jpg' },
    { title: '@hydropure_official', image: './assets/img/ig.jpg' },
    { title: 'hydropure@gmail.com', image: './assets/img/gmail.jpg' }
    
  ];
}
