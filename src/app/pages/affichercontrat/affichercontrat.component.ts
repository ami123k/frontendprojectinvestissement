import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicepropositionService} from '../../_service/serviceproposition.service';
import {ServiceprojetService} from '../../_service/serviceprojet.service';
import {PrimeNGConfig} from 'primeng/api';
import {ServicecontratService} from '../../_service/servicecontrat.service';

@Component({
  selector: 'app-affichercontrat',
  templateUrl: './affichercontrat.component.html',
  styleUrls: ['./affichercontrat.component.css'],
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }

      p {
          margin: 0;
      }

      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `]
})
export class AffichercontratComponent implements OnInit {
private  url: any;
public contrat: any;
  file: File;
public user: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  propositions: any;
  progress: { percentage: number } = { percentage: 0 };
  @Input() fileUpload: string;

  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;
  private value;

  constructor(private primengConfig: PrimeNGConfig, private tokenStorageService: TokenStorageService, private  router: Router ,
              private activatedRoute: ActivatedRoute, private propositionservice: ServicepropositionService,  private SP: ServicecontratService) { }


  ngOnInit(): void {
    this.affichermyproposition();
    this.primengConfig.ripple = true;

  }
  showBasicDialog() {
    this.displayBasic = true;
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  affichermyproposition() {

    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(atob(this.activatedRoute.snapshot.params.id));
    this.propositionservice.getmycontratbyprojet(this.url).subscribe(e => {
      this.contrat = e;
console.log(this.contrat);

    });

  }



  approuvercontrat(id_contrat: any, id_user: any , id_projet: any) {

    this.currentFileUpload = this.selectedFiles.item(0);
    this.SP.Approuvercontrat(this.currentFileUpload, id_contrat).subscribe(aaa => {     this.displayBasic = false;

      this.propositionservice.findpropositioncontrat(id_projet, id_user).subscribe(e => {
        this.propositions = e;
        console.log(this.propositions[0]);
        this.propositionservice.UpdatePropositionConfirm(this.propositions[0].id_Proposition, this.value)
          .subscribe(data => {});
      });

    });
  }

}
