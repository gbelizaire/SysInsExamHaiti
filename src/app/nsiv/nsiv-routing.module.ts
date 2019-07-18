import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NsivListComponent } from './nsiv-list/nsiv-list.component';

const routes: Routes = [
  {path:'',
   component:NsivListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NsivRoutingModule { }
