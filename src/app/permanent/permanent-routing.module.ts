import { RapportComponent } from './rapport/rapport.component';
import { PermanentComponent } from './permanent.component';
import { SaisieComponent } from './saisie/saisie.component';
import { PermanentListComponent } from './permanent-list/permanent-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {
    path:'',
    component:PermanentComponent,
    children: [
     {
    path:'saisie',
    component:SaisieComponent
   }
   ,
   {
    path:'recherche',
    component:RechercheComponent
   }
   ,
   {
    path:'rapport',
    component:RapportComponent
    }]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermanentRoutingModule { }
