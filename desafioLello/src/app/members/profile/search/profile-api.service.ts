import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  /* Dados da API */
  URL_API = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  /* Método GET para buscar os dados do membro selecionadp pelo usuário */
  getInfoMember(github_login) : Observable<any>{

    // Carrega os dados do membro selecionado
    this.URL_API = `https://api.github.com/users/${github_login}`;
    return this.http.get<any>(this.URL_API)
    .pipe( map((data: any) => [data]) )
    
  }
}