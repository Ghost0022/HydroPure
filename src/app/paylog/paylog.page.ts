import { Component,  } from '@angular/core';

@Component({
  selector: 'app-paylog',
  templateUrl: './paylog.page.html',
  styleUrls: ['./paylog.page.scss'],
})
export class PaylogPage  {

  constructor() { }

  records= [
    {
      "name": 'Name: Juan Dela Cruz',
      "mID": 'Meter ID: M-12345',
      "date": 'Bill Period: June 15, 2021- July 15, 2021',
      "prev": 'Prev: 135',
      "current": 'Curr: 160',
      "usage": 'Usage: 20',
      "amount": 'Amount: P500',
    },
    {
      "name": 'Name: Juan Dela Cruz',
      "mID": 'Meter ID: M-12345',
      "date": 'Bill Period: May 15, 2021- June 15, 2021',
      "prev": 'Prev: 120',
      "current": 'Curr: 135',
      "usage": 'Usage: 15',
      "amount": 'Amount: P300',
    },
    {
      "name": 'Name: Juan Dela Cruz',
      "mID": 'Meter ID: M-12345',
      "date": 'Bill Period: April 15, 2021- May 15, 2021',
      "prev": 'Prev: 110',
      "current": 'Curr: 120',
      "usage": 'Usage: 10',
      "amount": 'Amount: P200',
    }
  ]

}
