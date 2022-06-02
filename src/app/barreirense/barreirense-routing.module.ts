import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarreirensePage } from './barreirense.page';

const routes: Routes = [
  {
    path: '',
    component: BarreirensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarreirensePageRoutingModule {}
