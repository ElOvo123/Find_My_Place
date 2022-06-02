import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoinhosPage } from './moinhos.page';

const routes: Routes = [
  {
    path: '',
    component: MoinhosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoinhosPageRoutingModule {}
