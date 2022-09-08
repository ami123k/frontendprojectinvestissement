import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicepropositionService} from '../../_service/serviceproposition.service';
import {ServiceprojetService} from '../../_service/serviceprojet.service';
import {TokenStorageService} from '../../_service/token-storage.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import {PrimeNGConfig, SelectItem} from 'primeng/api';
import {thin} from '@fortawesome/fontawesome-svg-core/import.macro';
@Component({
  selector: 'app-afficher-my-projet',
  templateUrl: './afficher-my-projet.component.html',
  styleUrls: ['./afficher-my-projet.component.css']
})
export class AfficherMyProjetComponent implements OnInit {
  public projets: any;
userid: any;

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;
  montant_debut: any;
  nom: string;

  constructor(private primengConfig: PrimeNGConfig, private tS: TokenStorageService, private serviceprojet: ServiceprojetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.afficherprojet();

    this.sortOptions = [
      {label: 'Price High to Low', value: '!montant_debut'},
      {label: 'Price Low to High', value: 'montant_debut'}
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  afficherprojet() {

    this.serviceprojet.getresouce(this.serviceprojet.host + 'Getmyprojets/' + this.tS.getUser().id)
      .subscribe(res => {
        this.projets = res;
        console.log(res);
        console.log(this.projets);
      });
  }

  onlistpropo(s) {
    console.log(s);
    this.router.navigateByUrl('onlistpropo/' + btoa(s.id_Projet));
  }
  redirectioncontrat(s) {
    console.log(s);
    this.router.navigateByUrl('affichercontrat/' + btoa(s.id_Projet));
  }

  myproposition(s) {
    console.log(s);
    this.router.navigateByUrl('onlistpropo/' + btoa(s.id_Projet));
  }

  ajouterpropositionredirection(s) {
    console.log(s);
    this.router.navigateByUrl('ajouterproposition/' + btoa(s.id_Projet));
  }


}
