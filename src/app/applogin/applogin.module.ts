import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApploginPageRoutingModule } from './applogin-routing.module';

import { ApploginPage } from './applogin.page';
import { InputModule } from '../components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    ApploginPageRoutingModule,
  ],
  declarations: [ApploginPage],
})
export class ApploginPageModule {}