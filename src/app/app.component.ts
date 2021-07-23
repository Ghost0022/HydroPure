import { Component } from '@angular/core';  
 import { Platform } from '@ionic/angular'; 
 
@Component({  
   selector: 'app-root',  
   templateUrl: 'app.component.html',  
   styleUrls: ['app.component.scss']  
 })  
 export class AppComponent {  
   navigate: any;  
   constructor(   
     private platform: Platform)
      {   
     this.sideMenu();  
     this.initializeApp();  
   }  
   initializeApp() {  
     this.platform.ready().then(() => { 
       
     });  
   }  
   sideMenu() {  
     this.navigate =   
     [  
      { 
        title : 'Home',  
        url : '/tabs',
        icon : 'home',
      },  
         { 
         title : 'Profile', 
         url: '/profile',
         icon : 'person',
         },
       { 
         title : 'Contact',  
         url : '/contact',
         icon : 'logo-rss',
       },   
     ];  
   } 
 }   