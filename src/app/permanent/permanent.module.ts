import { CandidatPermanentComponent } from './candidat-permanent/candidat-permanent.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { PermanentRoutingModule } from './permanent-routing.module';
import { PermanentListComponent } from './permanent-list/permanent-list.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SaisieComponent } from './saisie/saisie.component';
import { RapportComponent } from './rapport/rapport.component';
import { PermanentComponent } from '../permanent/permanent.component';
import { MatPaginatorModule, MatSortModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
//import { CandidatPermanentComponent } from '../candidat-permanent/candidat-permanent.component';


@NgModule({
  declarations: [PermanentListComponent, 
    RechercheComponent,
     SaisieComponent,
      RapportComponent, 
      PermanentComponent, 
      CandidatPermanentComponent
    ],
  imports: [
    CommonModule,
    PermanentRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule, MatSortModule, MatDatepickerModule, MatNativeDateModule,
    MatTableModule
    
  ]
})
export class PermanentModule { }
