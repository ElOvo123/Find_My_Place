import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuditorioAugustoCabritaPageRoutingModule } from './auditorio-augusto-cabrita-routing.module';

import { AuditorioAugustoCabritaPage } from './auditorio-augusto-cabrita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuditorioAugustoCabritaPageRoutingModule
  ],
  declarations: [AuditorioAugustoCabritaPage]
})
export class AuditorioAugustoCabritaPageModule {}
