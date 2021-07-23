import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaylogPageRoutingModule } from './paylog-routing.module';

import { PaylogPage } from './paylog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaylogPageRoutingModule
  ],
  declarations: [PaylogPage]
})
export class PaylogPageModule {}
