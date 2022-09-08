import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {HomeComponent} from './home/home.component';
import {TablesComponent} from './pages/tables/tables.component';
import {IconsComponent} from './pages/icons/icons.component';
import {AfficherProjetComponent} from './pages/afficher-projet/afficher-projet.component';
import {AfficherpropositionComponent} from './pages/afficherproposition/afficherproposition.component';
import {AjouterProjetComponent} from './pages/ajouter-projet/ajouter-projet.component';
import {AjouterPropositionComponent} from './pages/ajouter-proposition/ajouter-proposition.component';
import {AfficherMyProjetComponent} from './pages/afficher-my-projet/afficher-my-projet.component';
import {AddprojetComponent} from './pages/addprojet/addprojet.component';
import {AfficherpropositionNonconfirmeComponent} from './pages/afficherproposition-nonconfirme/afficherproposition-nonconfirme.component';
import {AfficherpropositionconfirmeComponent} from './pages/afficherpropositionconfirme/afficherpropositionconfirme.component';
import {AfficherpropositionpreconfirmeComponent} from './pages/afficherpropositionpreconfirme/afficherpropositionpreconfirme.component';
import {AddcontratComponent} from './pages/addcontrat/addcontrat.component';
import {AffichercontratComponent} from './pages/affichercontrat/affichercontrat.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login',          component: LoginComponent },
      { path: 'register',       component: RegisterComponent}
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'home', component: HomeComponent},
      {path: 'tables', component: TablesComponent},
      {path: 'icons', component: IconsComponent},
      {path: 'afficherprojet', component: AfficherProjetComponent},
      {path: 'onlistpropo/:id', component: AfficherpropositionComponent},
      {path: 'affichermypropo/:id', component: AfficherpropositionComponent},
      {path: 'ajouterprojet', component: AjouterProjetComponent},
      {path: 'ajouterproposition/:id', component: AjouterPropositionComponent},
      {path: 'affichermyprojet', component: AfficherMyProjetComponent},
      {path: 'addprojet', component: AddprojetComponent},
      {path: 'afficherpropositionnonconfirme', component: AfficherpropositionNonconfirmeComponent},
      {path: 'afficherpropositionconfirme', component: AfficherpropositionconfirmeComponent},
      {path: 'afficherpropositionpreconfirme', component: AfficherpropositionpreconfirmeComponent},
      {path: 'addcontrat/:id', component: AddcontratComponent},
      {path: 'affichercontrat/:id', component: AffichercontratComponent}
    ]
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
