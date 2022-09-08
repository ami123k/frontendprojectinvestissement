import {Component, Input, OnInit} from '@angular/core';
import {ServiceprojetService} from '../../_service/serviceprojet.service';
import {TokenStorageService} from '../../_service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-addprojet',
  templateUrl: './addprojet.component.html',
  styleUrls: ['./addprojet.component.css']
})
export class AddprojetComponent implements OnInit {

  constructor(private sp: ServiceprojetService, private tokenStorage: TokenStorageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  file: File;
  categorie: any;
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
    {value: 'sport', viewValue: 'sport'},
      {value: 'finance', viewValue: 'finance'},
    {value: 'agriculture', viewValue: 'agriculture'},
    {value: 'tourisme', viewValue: 'tourisme'},
    {value: 'culture', viewValue: 'culture'}

  ];

  ngOnInit(): void {

  }
  selected() {
    console.log(this.categorie);
  }

  ajouterprojet() {
    this.userid = this.tokenStorage.getUser().id;
    this.currentFileUpload = this.selectedFiles.item(0);

    this.sp.ajouterprojet(this.currentFileUpload, this.categorie, this.montant_debut, this.montant_fin,
      this.nom, this.predescription, this.userid, this.description).subscribe(aaa => { console.log(this.categorie)  });  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
export interface Equi {
  value: string;
  viewValue: string;
}
