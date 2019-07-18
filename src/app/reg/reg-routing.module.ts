import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegListComponent } from './reg-list/reg-list.component';

const routes: Routes = [
  {
    path:'',
    component:RegListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegRoutingModule { }
