import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceprojetService} from '../../_service/serviceprojet.service' ;
import {PrimeNGConfig, SelectItem} from 'primeng/api';
import {ServicepropositionService} from '../../_service/serviceproposition.service';
import {TokenStorageService} from '../../_service/token-storage.service';

@Component({
  selector: 'app-afficher-projet',
  templateUrl: './afficher-projet.component.html',
  styleUrls: ['./afficher-projet.component.css']
})

export class AfficherProjetComponent implements OnInit {
  public projets: any;
  public hidden: Boolean = true;

  results2: Array<any> = [];


  sortOptions: SelectItem[];

  sortOrder: number;
  sortField: string;
  montant_debut: any;
  nom: string;
  categories: any[];
  projet: any;
  c: any;
  constructor(private tS: TokenStorageService, private primengConfig: PrimeNGConfig, private propositionservice: ServicepropositionService, private api: ServiceprojetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.afficherprojet();


    this.categories = [
      {label: 'sport', value: 'sport'},
      {label: 'finance', value: 'finance'},
      {label: 'agriculture', value: 'agriculture'},
      {label: 'tourisme', value: 'tourisme'},
      {label: 'culture', value: 'culture'}

    ];
    this.sortOptions = [
      {label: 'Price High to Low', value: '!montant_debut'},
      {label: 'Price Low to High', value: 'montant_debut'}
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  afficherprojet() {
    this.api.getresouce(this.api.host + 'GetAllProject')
      .subscribe(res => {
        this.projets = res;
        console.log(res);
        console.log(this.projets);
        this.montant_debut = this.projets.montant_debut;

      });
  }

  onlistpropo(s) {
    console.log(s);
    this.router.navigateByUrl('onlistpropo/' + btoa(s.id_Projet));
  }

  ajouterpropositionredirection(s) {
    console.log(s);
    this.router.navigateByUrl('ajouterproposition/' + btoa(s.id_Projet));
  }

  myproposition(s) {
    console.log(s);
    this.router.navigateByUrl('onlistpropo/' + btoa(s.id_Projet));
  }




}

