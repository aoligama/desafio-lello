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
  getAllMembers(github_login) : Observable<any>{
    if(github_login.value != '' && github_login.value !== undefined){ // Verifica se um login foi digitado
      // Filtra membros
      this.URL_API = `https://api.github.com/users/${github_login.value}`;
      return this.http.get<any>(this.URL_API)
      .pipe( map((data: any) => [data]) )
    } else{
      // Busca todos os membros
      this.URL_API = 'https://api.github.com/orgs/angular/public_members';
      return this.http.get<any>(this.URL_API)
      .pipe( map((data: any) => data) )
    }
  }
}