import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegRoutingModule } from './reg-routing.module';
import { RegListComponent } from './reg-list/reg-list.component';

@NgModule({
  declarations: [RegListComponent],
  imports: [
    CommonModule,
    RegRoutingModule
  ]
})
export class RegModule { }
