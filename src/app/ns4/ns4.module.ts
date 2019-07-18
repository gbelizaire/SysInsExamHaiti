import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ns4RoutingModule } from './ns4-routing.module';
import { Ns4ListComponent } from './ns4-list/ns4-list.component';

@NgModule({
  declarations: [Ns4ListComponent],
  imports: [
    CommonModule,
    Ns4RoutingModule
  ]
})
export class Ns4Module { }
