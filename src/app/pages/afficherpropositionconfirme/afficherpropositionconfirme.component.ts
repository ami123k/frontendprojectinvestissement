import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';
import {TokenStorageService} from '../../_service/token-storage.service';
import {ServiceprojetService} from '../../_service/serviceprojet.service';
import {PrimeNGConfig} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicepropositionService} from '../../_service/serviceproposition.service';

@Component({
  selector: 'app-afficherpropositionconfirme',
  templateUrl: './afficherpropositionconfirme.component.html',
  styleUrls: ['./afficherpropositionconfirme.component.css']
})
export class AfficherpropositionconfirmeComponent implements OnInit {

  status_propo: any[];
  selectedCustomers: any;

  loading = true;

  @ViewChild('dt') table: Table;
  public projet: any;
  public users: any;
  public proposition: any;
  public propositions: any;
  public id_Proposition: any;
  public aa: string;
  public url: string;
  abc: any;
  abcd: any;
  constructor(private tokenStorageService: TokenStorageService, private serviceprojet: ServiceprojetService, private primengConfig: PrimeNGConfig, private  router: Router ,
              private activatedRoute: ActivatedRoute, private propositionservice: ServicepropositionService) { }

  ngOnInit( ): void {
    this.afficherpropositionnonconfirm();
    this.loading = false;
    this.primengConfig.ripple = true;
    this.status_propo = [
      {label: 'confirme', value: 'confirme'},
      {label: 'NonConfirme', value: 'NonConfirme'},
      {label: 'preconfirme', value: 'preconfirme'},
    ];
    console.log(this.abcd);
    console.log(this.proposition);
    console.log(this.proposition.id_Proposition);
  }
  setvalue(abcd, id_Proposition) {
    abcd = id_Proposition;
  }
  afficherpropositionnonconfirm() {
    this.url = this.tokenStorageService.getUser().id;
    this.propositionservice.getproposition(this.url, 'GetAllPropositionconfirm/').subscribe(e => {
      this.propositions = e;
      console.log(this.propositions);
      this.serviceprojet.getresouce(this.serviceprojet.host + 'GetOneProject/' + this.url )
        .subscribe(res => {
          this.projet = res;
          console.log(this.projet);
        });
    });
  }


  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }
  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }
  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(event) {
    this.table.filter(event.value, 'user', 'in');
  }

}
