import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi ='https://portafolio-web-api-default-rtdb.firebaseio.com'

  constructor( private http: HttpClient) { }

  public getData (): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
