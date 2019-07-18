import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NsivRoutingModule } from './nsiv-routing.module';
import { NsivListComponent } from './nsiv-list/nsiv-list.component';

@NgModule({
  declarations: [NsivListComponent],
  imports: [
    CommonModule,
    NsivRoutingModule
  ]
})
export class NsivModule { }
