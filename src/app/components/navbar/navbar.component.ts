import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_service/token-storage.service';
import {entrepreneur, Investisseur} from '../sidebar/sidebar.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public name: string;
  constructor(location: Location,  private element: ElementRef, private router: Router, private tokenStorageService: TokenStorageService) {
    this.location = location;
  }

  ngOnInit() {
    console.log(this.tokenStorageService.getUser().roles[0]);
    if (this.tokenStorageService.getUser().roles[0] === 'ROLE_MODERATOR') {
      this.listTitles = entrepreneur.filter(listTitle => listTitle);
      this.name = this.tokenStorageService.getUser().username;

    } else if (this.tokenStorageService.getUser().roles[0] === 'ROLE_USER') {


      this.listTitles = Investisseur.filter(listTitle => listTitle);
      this.name = this.tokenStorageService.getUser().username;
    }
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
 logout() {

   window.sessionStorage.clear();

 }

}
