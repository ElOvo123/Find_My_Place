import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoinhosPageRoutingModule } from './moinhos-routing.module';

import { MoinhosPage } from './moinhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoinhosPageRoutingModule
  ],
  declarations: [MoinhosPage]
})
export class MoinhosPageModule {}
