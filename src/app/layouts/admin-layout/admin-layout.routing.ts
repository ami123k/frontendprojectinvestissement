import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {HomeComponent} from '../../home/home.component';
import {AfficherProjetComponent} from '../../pages/afficher-projet/afficher-projet.component';
import {AfficherpropositionComponent} from '../../pages/afficherproposition/afficherproposition.component';
import {AjouterProjetComponent} from '../../pages/ajouter-projet/ajouter-projet.component';
import {AjouterPropositionComponent} from '../../pages/ajouter-proposition/ajouter-proposition.component';
import {AfficherMyProjetComponent} from '../../pages/afficher-my-projet/afficher-my-projet.component';
import {AddprojetComponent} from '../../pages/addprojet/addprojet.component';
import {
  AfficherpropositionNonconfirmeComponent
} from '../../pages/afficherproposition-nonconfirme/afficherproposition-nonconfirme.component';
import {AfficherpropositionconfirmeComponent} from '../../pages/afficherpropositionconfirme/afficherpropositionconfirme.component';
import {AfficherpropositionpreconfirmeComponent} from '../../pages/afficherpropositionpreconfirme/afficherpropositionpreconfirme.component';
import {AddcontratComponent} from '../../pages/addcontrat/addcontrat.component';
import {AffichercontratComponent} from '../../pages/affichercontrat/affichercontrat.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}

];

