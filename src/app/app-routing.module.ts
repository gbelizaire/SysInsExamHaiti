import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes =[
  {
    path: 'permanent', 
    loadChildren: () => import('./permanent/permanent.module').then(m => m.PermanentModule)
  },
  {
    path: 'nsiv', 
    loadChildren: () => import('./nsiv/nsiv.module').then(m => m.NsivModule)
  },
  {
    path: 'reg', 
    loadChildren: () => import('./reg/reg.module').then(m => m.RegModule)
  },
  {
    path: 'neuv', 
    loadChildren: () => import('./neuv/neuv.module').then(m => m.NeuvModule)
  },
  {
    path: 'sec', 
    loadChildren: () => import('./sec/sec.module').then(m => m.SecModule)
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
