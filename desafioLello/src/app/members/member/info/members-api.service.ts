import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersApiService {

  /* Dados da API */
  URL_API = 'https://api.github.com/orgs/angular/public_members';

  constructor(private http: HttpClient) { }

  /* Método GET para buscar os dados na API */
  getAllMembers() : Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe( map((data: any) => data) )
  }
}