import { Component } from '@angular/core';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  constructor() { }

  team: any[] = [
    {
    "name":"Andrei Patron",
    "number": "(02-1234-567)",
    "email": "andreipatron@gmail.com"
    },
    {
      "name":"May Macalintal",
      "number": "(02-5820-332)",
      "email": "maymacalintal@gmail.com"
    },
    {
      "name":"Andrea Bait",
      "number": "(02-2416-999)",
      "email": "andreabait@gmail.com"
      }
  ]
  
}
