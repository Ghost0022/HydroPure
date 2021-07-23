import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsignupPage } from './appsignup.page';

const routes: Routes = [
  {
    path: '',
    component: AppsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsignupPageRoutingModule {}