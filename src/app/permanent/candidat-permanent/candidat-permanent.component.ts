import {Component, OnInit, Input,Output, EventEmitter,ViewChild,AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';

export interface CandidatElement {
  Matricule: string,
  nom: string,
  prenom: string,
  sexe: string,
  dateNaiss: string,
  Session: String;
  Section: string,
  Annee:string,
  NotesOrdinaire: number,
  NotesExtraOrdinaire: number
}
const ELEMENT_DATA: CandidatElement[] = [];

@Component({
  selector: 'candidat-permanent',
  templateUrl: './candidat-permanent.component.html',
  styleUrls: ['./candidat-permanent.component.css']
})
export class CandidatPermanentComponent implements OnInit {

  @Input() personnes:CandidatElement[];
  @Output() candidatselectionne = new EventEmitter();
  personnes_:any[]=this.personnes; 
  firstTime :boolean = true;
   Rech:string=""; 
  
   displayedColumns: string[] = ['nom', 'prenom', 'sexe','dateNaiss'];//,'Section','NotesOrdinaire','NotesExtraOrdinaire'];
   dataSource = new MatTableDataSource<CandidatElement>();
  // @ViewChild(MatPaginator,) paginator: MatPaginator;

  constructor() { }
 ngAfterViewInit(){
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  affiche(r){
    // console.log("On vient de cliquer sur moi");
    // console.log(r);
    this.candidatselectionne.emit(r);
  }
  ngOnInit() {
      
    this.dataSource.data =[];
     setTimeout(()=>{
      this.afficheData();
    },1000);
   // this.dataSource.paginator = this.paginator;
    
  }
  afficheData(){
   // console.log(this.personnes);
    this.dataSource.data = this.personnes;
    //this.dataSource.paginator = this.paginator;
  }

}
