import {Component, Inject, Input, OnInit} from '@angular/core';
import {ServiceprojetService} from '../../_service/serviceprojet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {TokenStorageService} from '../../_service/token-storage.service';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.css']
})
export class AjouterProjetComponent implements OnInit {
  constructor(private sp: ServiceprojetService, private tokenStorage: TokenStorageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  file: File;
  categorie;
  montant_debut: any;
  montant_fin: any;
  nom: string;
  predescription: string;
  userid: any ;
  description: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  @Input() fileUpload: string;

  equipes: Equi[] = [
    {value: 'fourniture', viewValue: 'fourniture'},
    {value: 'informatique', viewValue: 'informatique'},
    {value: 'materiel', viewValue: 'materiel'},
    {value: 'education', viewValue: 'education'}
  ];

  ngOnInit(): void {

  }
  selected() {
    console.log(this.categorie);
  }

  ajouterprojet() {
   this.userid = this.tokenStorage.getUser().id;
    this.sp.ajouterprojet(this.file, this.categorie, this.montant_debut, this.montant_fin,
      this.nom, this.predescription, this.userid, this.description).subscribe(aaa => {   });  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  }
export interface Equi {
  value: string;
  viewValue: string;
}
