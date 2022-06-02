import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditorioAugustoCabritaPage } from './auditorio-augusto-cabrita.page';

const routes: Routes = [
  {
    path: '',
    component: AuditorioAugustoCabritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditorioAugustoCabritaPageRoutingModule {}
