import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AfficherpropositionComponent } from './pages/afficherproposition/afficherproposition.component';
import { AjouterPropositionComponent } from './pages/ajouter-proposition/ajouter-proposition.component';
import { AfficherMyProjetComponent } from './pages/afficher-my-projet/afficher-my-projet.component';
import { AfficherMypropositionbyProjetComponent } from './pages/afficher-mypropositionby-projet/afficher-mypropositionby-projet.component';
import {MatSliderModule} from '@angular/material/slider';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { AddprojetComponent } from './pages/addprojet/addprojet.component';
import {BrowserModule} from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
import { AfficherpropositionconfirmeComponent } from './pages/afficherpropositionconfirme/afficherpropositionconfirme.component';
import { AfficherpropositionpreconfirmeComponent } from './pages/afficherpropositionpreconfirme/afficherpropositionpreconfirme.component';
import { AfficherpropositionNonconfirmeComponent } from './pages/afficherproposition-nonconfirme/afficherproposition-nonconfirme.component';
import { AddcontratComponent } from './pages/addcontrat/addcontrat.component';
import { AffichercontratComponent } from './pages/affichercontrat/affichercontrat.component';
import {DividerModule} from 'primeng/divider';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ApprentissageComponent } from './pages/apprentissage/apprentissage.component';
import {AfficherProjetComponent} from './pages/afficher-projet/afficher-projet.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {TablesComponent} from './pages/tables/tables.component';
import {IconsComponent} from './pages/icons/icons.component';
import {HomeComponent} from './home/home.component';
import {ClipboardModule} from 'ngx-clipboard';
import {RatingModule} from 'primeng/rating';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
import { InvestirbuttonComponent } from './pages/investirbutton/investirbutton.component';


@NgModule({
  imports: [
    BrowserModule, HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    FontAwesomeModule,
    CardModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    DividerModule,
    DialogModule,
    ConfirmDialogModule,
    NgbModule,
    MatSliderModule,
    ClipboardModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    DataViewModule,
    RatingModule,
    InputTextareaModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    ContextMenuModule,
    ToastModule,
    ProgressBarModule,
      ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AfficherpropositionComponent,
    AjouterPropositionComponent,
    AfficherMyProjetComponent,
    AfficherProjetComponent,
    AfficherMypropositionbyProjetComponent,
    AddprojetComponent,
    AfficherpropositionconfirmeComponent,
    AfficherpropositionpreconfirmeComponent,
    AfficherpropositionNonconfirmeComponent,
    AddcontratComponent,
    AffichercontratComponent,
    ApprentissageComponent,
  DashboardComponent,
  UserProfileComponent,
  TablesComponent,
  IconsComponent,
  HomeComponent,
  InvestirbuttonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
