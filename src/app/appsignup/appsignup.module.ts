import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppsignupPageRoutingModule } from './appsignup-routing.module';

import { AppsignupPage } from './appsignup.page';
import { InputModule } from '../components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    AppsignupPageRoutingModule,
  ],
  declarations: [AppsignupPage],
})
export class AppsignupPageModule {}