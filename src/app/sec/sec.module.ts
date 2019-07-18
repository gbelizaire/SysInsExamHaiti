import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecRoutingModule } from './sec-routing.module';
import { SecListComponent } from './sec-list/sec-list.component';

@NgModule({
  declarations: [SecListComponent],
  imports: [
    CommonModule,
    SecRoutingModule
  ]
})
export class SecModule { }
