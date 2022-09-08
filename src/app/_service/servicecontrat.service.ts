import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicecontratService {

  constructor(private httpClient: HttpClient) { }
  public host = 'http://localhost:8085/';

  Approuvercontrat(file: File, id: any) {
    const formdata: FormData = new FormData();
    formdata.append('signature_entrepreneur', file);

    const req = new HttpRequest('PUT', this.host + 'UpdateContrat/' + id,  formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }
}
