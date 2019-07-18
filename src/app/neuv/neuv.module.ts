import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeuvRoutingModule } from './neuv-routing.module';
import { NeuvListComponent } from './neuv-list/neuv-list.component';

@NgModule({
  declarations: [NeuvListComponent],
  imports: [
    CommonModule,
    NeuvRoutingModule
  ]
})
export class NeuvModule { }
