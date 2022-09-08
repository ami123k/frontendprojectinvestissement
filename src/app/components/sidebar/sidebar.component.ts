import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../_service/token-storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const entrepreneur: RouteInfo[] = [
    { path: '/login', title: 'Login',  icon: 'ni-key-25 text-info', class: '' },
  { path: '/afficherprojet', title: 'projets',  icon: 'ni-circle-08 text-pink', class: ''  },
  { path: '/affichermyprojet', title: 'mes projets',  icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/addprojet', title: 'ajouter projet',  icon: 'ni-circle-08 text-pink', class: '' },
];
export const Investisseur: RouteInfo[] = [
  { path: '/afficherprojet', title: 'projets',  icon: 'ni-circle-08 text-pink', class: ''  },
  { path: '/afficherpropositionnonconfirme', title: 'proposition non confirme', icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/afficherpropositionconfirme', title: 'proposition  confirme',  icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/afficherpropositionpreconfirme', title: 'proposition  preconfirme',  icon: 'ni-circle-08 text-pink', class: '' }


];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
public userid: string;
  constructor(private activatedRoute: ActivatedRoute, private tS: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tS.getUser().roles[0] === 'ROLE_MODERATOR') {
    this.menuItems = entrepreneur.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
    } else if (this.tS.getUser().roles[0] === 'ROLE_USER') {

      this.menuItems = Investisseur.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }

    this.userid = this.tS.getUser().id ;

  }
  logout() {
    window.sessionStorage.clear();
  }
  afficherAllprojet() {
    this.router.navigateByUrl('afficherprojet/');
  }
  affichermyprojet () {

    this.router.navigateByUrl('affichermyprojet/');
  }
}
