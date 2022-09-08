import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicepropositionService} from '../../_service/serviceproposition.service';
import {TokenStorageService} from '../../_service/token-storage.service';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-afficher-mypropositionby-projet',
  templateUrl: './afficher-mypropositionby-projet.component.html',
  styleUrls: ['./afficher-mypropositionby-projet.component.css']
})
export class AfficherMypropositionbyProjetComponent implements OnInit {
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
  userid: any;
  constructor(private tokenStorageService: TokenStorageService, private  router: Router ,
              private activatedRoute: ActivatedRoute, private propositionservice: ServicepropositionService) { }


  ngOnInit(): void {
  this.affichermyproposition();
  }
  affichermyproposition() {
    this.userid = this.tokenStorageService.getUser().id ;

    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.activatedRoute.snapshot.params.id);
    this.propositionservice.getmypropositionbyprojet(this.url, this.userid).subscribe(e => {
      this.propositions = e;
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
