import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApploginPage } from './applogin.page';

const routes: Routes = [
  {
    path: 'applogin',
    component: ApploginPage
  },
  {
    path: '',
    redirectTo: '/applogin',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApploginPageRoutingModule {}