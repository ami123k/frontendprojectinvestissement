import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServicepropositionService} from '../../_service/serviceproposition.service';
import {TokenStorageService} from '../../_service/token-storage.service';

@Component({
  selector: 'app-investirbutton',
  templateUrl: './investirbutton.component.html',
  styleUrls: ['./investirbutton.component.css']
})
export class InvestirbuttonComponent implements OnInit {
  @Input()
  public projet: any;
  hidden = true;
  constructor(private tS: TokenStorageService, private router: Router, private propositionservice: ServicepropositionService) { }

  ngOnInit(): void {
    console.log(this.projet.id_Projet);
    this.testinvestissement(this.projet.id_Projet);
  }
  ajouterpropositionredirection() {
    console.log(this.projet);
    this.router.navigateByUrl('ajouterproposition/' + btoa(this.projet.id_Projet));
  }

  testinvestissement(id_projet) {

    // tslint:disable-next-line:max-line-length
    this.propositionservice.finduserproposerprojet(id_projet, this.tS.getUser().id).subscribe(e => {  console.log(e); this.hidden = e ; });
  }
}


