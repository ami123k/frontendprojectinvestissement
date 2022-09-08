import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicepropositionService} from '../../_service/serviceproposition.service';
import {PrimeNGConfig} from 'primeng/api';
import {Table} from 'primeng/table';
import {ServiceprojetService} from '../../_service/serviceprojet.service';

@Component({
  selector: 'app-afficherproposition',
  templateUrl: './afficherproposition.component.html',
  styleUrls: ['./afficherproposition.component.css']
})
export class AfficherpropositionComponent implements OnInit {



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
  constructor(private serviceprojet: ServiceprojetService, private primengConfig: PrimeNGConfig, private  router: Router ,
              private activatedRoute: ActivatedRoute, private propositionservice: ServicepropositionService) { }

  ngOnInit( ): void {
this.afficherproposition();
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
  afficherproposition() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.activatedRoute.snapshot.params.id);
    this.propositionservice.getpropositionbyprojet(this.url).subscribe(e => {
      this.propositions = e;
      console.log(this.propositions);

      this.serviceprojet.getresouce(this.serviceprojet.host + 'GetOneProject/' + this.url )
        .subscribe(res => {
          this.projet = res;
          console.log(this.projet);
        });
         });
  }

  afficherusername(propositionid) {

  this.serviceprojet.getone(this.serviceprojet.host + 'finduserbyproposition/' + propositionid )
    .subscribe(abc => {
return abc;    });
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
  Valider(id, value): void {

    this.propositionservice.UpdatePropositionpreConfirm(id,value)
      .subscribe(data => {alert('vous voulez confirmer cette proposition'),        window.location.reload(); });
  }
}
