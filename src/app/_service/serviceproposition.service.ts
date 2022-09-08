import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicepropositionService {
  private baseUrl = 'http://localhost:8085/';
  constructor(private http: HttpClient) { }
  public save(url, data): Observable<any> {
    return this.http.post<any>(url, data);
  }
  getpropositionbyprojet(idprojet: string ): Observable<any> {
    return this.http.get(this.baseUrl + 'listpropbyprojet/' + idprojet);
  }
  getproposition(iduser: string , url:any): Observable<any> {
    return this.http.get(this.baseUrl + url + iduser);
  }
  getmycontratbyprojet(idprojet: string ): Observable<any> {
    return this.http.get(this.baseUrl + 'contratByprojet/' + idprojet  );
  }
  getmypropositionbyprojet(idprojet: string, iduser: any ): Observable<any> {
    return this.http.get(this.baseUrl + 'listpropbyprojetanduser/' + idprojet + '/' + iduser );
  }

 /* public saveproposition(url, data): Observable<any> {
    return this.http.post<any>(url, data);
  }
*/
  public saveproposition(montant: any, description: string, iduser: number, idprojet: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('montant', montant);
    formdata.append('description', description);
    const req = new HttpRequest('POST', this.baseUrl + iduser + '/addproposition/' + idprojet, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  public UpdatePropositionpreConfirm(url, data): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'UpdatePropositionpreConfirm/' + url, data);
  }
  public UpdatePropositionConfirm(url, data): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'UpdatePropositionConfirm/' + url, data);
  }
  findpropositioncontrat(idprojet: string, iduser: any ): Observable<any> {
    return this.http.get(this.baseUrl + 'findpropositioncontrat/' + idprojet + '/' + iduser );
  }

  finduserproposerprojet(idprojet: any, iduser: any ): Observable<any> {
    return this.http.get(this.baseUrl + 'finduserbyprojetproposition/' + idprojet + '/' + iduser );
  }

}
