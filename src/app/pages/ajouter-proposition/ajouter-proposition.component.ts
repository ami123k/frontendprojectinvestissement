import { Component, OnInit } from '@angular/core';
import {ServiceprojetService} from '../../_service/serviceprojet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../_service/token-storage.service';
import {ServicepropositionService} from '../../_service/serviceproposition.service';

@Component({
  selector: 'app-ajouter-proposition',
  templateUrl: './ajouter-proposition.component.html',
  styleUrls: ['./ajouter-proposition.component.css']
})
export class AjouterPropositionComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private catservice: ServicepropositionService, private activatedRoute: ActivatedRoute, private router: Router) { }
  public idprojet: any;
  isSuccessful = false;
  public userid: any ;
  public proposition: any;
public description: any;
public montant: any;
  ngOnInit(): void {
  }

onsaveproposition() {
  this.idprojet = atob(this.activatedRoute.snapshot.params.id);
  console.log(this.activatedRoute.snapshot.params.id);
  this.userid = this.tokenStorageService.getUser().id ;
  console.log(this.description);
  this.catservice.saveproposition(this.montant, this.description, this.userid, this.idprojet).subscribe(aaa => { this.isSuccessful = true;
    console.log(aaa);
    console.log(this.description);
    console.log(this.activatedRoute.snapshot.params.id);


  });  }

}
