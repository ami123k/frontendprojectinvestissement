import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiceprojetService {

  public host = 'http://localhost:8085/';
  constructor(private httpClient: HttpClient) { }

  public saveprojet(url, data): Observable<any> {
    return this.httpClient.post<any>(url, data);
  }
  public getresouce(url): Observable<any> {
    return this.httpClient.get<any>(url);
  }
  public getone(url) {
    return this.httpClient.get(url);
  }
  public update(url, data): Observable<any> {
    return this.httpClient.put<any>(url, data);
  }
  ajouterprojet(file: File, categorie: string, montant_debut: string, montant_fin: string,
                    nom: string, predescription: string , userid: any, description: string) {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('description', description);
    formdata.append('montant_debut', montant_debut);
    formdata.append('montant_fin', montant_fin);
    formdata.append('nom', nom);
    formdata.append('predescription', predescription);
    formdata.append('userid', userid);
    formdata.append('categories', categorie);
    const req = new HttpRequest('POST', this.host + 'AddProject/' + userid, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }
  ajoutercontrat(file: File, montant: string, userid: any, titre: any, projet_id: any , description: string) {
    const formdata: FormData = new FormData();
    formdata.append('signature_investisseur', file);
    formdata.append('description', description);
    formdata.append('montant', montant);
    formdata.append('titre', titre);
    formdata.append('userid', userid);
    formdata.append('projetid', projet_id);
    formdata.append('description', description);
    const req = new HttpRequest('POST', this.host + 'AddContrat/' + userid + '/' + projet_id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }
}
