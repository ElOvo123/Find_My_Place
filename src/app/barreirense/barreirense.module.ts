import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarreirensePageRoutingModule } from './barreirense-routing.module';

import { BarreirensePage } from './barreirense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarreirensePageRoutingModule
  ],
  declarations: [BarreirensePage]
})
export class BarreirensePageModule {}
