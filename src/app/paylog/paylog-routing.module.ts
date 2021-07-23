import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaylogPage } from './paylog.page';

const routes: Routes = [
  {
    path: '',
    component: PaylogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaylogPageRoutingModule {}
