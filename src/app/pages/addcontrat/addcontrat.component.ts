import {Component, Input, OnInit} from '@angular/core';
import {ServiceprojetService} from '../../_service/serviceprojet.service';
import {TokenStorageService} from '../../_service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.css']
})
export class AddcontratComponent implements OnInit {


  constructor(private sp: ServiceprojetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  file: File;
  titre: any;
  montant: any;
  projetid: string;
  userid: any ;
  description: string;
str: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  @Input() fileUpload: string;

  ngOnInit(): void {
    this.str = window.location.href;
    console.log(this.str);
    this.str = this.str.split("/", 10);
   console.log(this.str[5] + this.str[6]);

  }
  ajouterprojet() {
    this.str = window.location.href;
    console.log(this.str);
    this.str = this.str.split("/", 10);
    console.log(this.str[5] + this.str[6]);
     this.currentFileUpload = this.selectedFiles.item(0);
this.sp.ajoutercontrat(this.currentFileUpload, this.montant, this.str[6], this.titre, this.str[5], this.description).subscribe(aaa => {  });
   }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


}
