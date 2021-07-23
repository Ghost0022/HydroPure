import { Component } from '@angular/core';
import {AlertController} from "@ionic/angular"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertCtrl: AlertController) {}
 
  async Submit() {  
    const alert = await this.alertCtrl.create({  
      header: 'Payment Accepted!',   
      message: 'Once the payment has been received, official receipt sent via email',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
  }




