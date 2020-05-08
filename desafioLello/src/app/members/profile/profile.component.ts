import { ProfileApiService } from '../profile/search/profile-api.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private profileSvc: ProfileApiService, // define serviço para busca na API
    private activatedRoute: ActivatedRoute // permite acesso a rota ativa (parametro com o usuário que foi selecionado)
  ) { }
  profile: Observable<any>

  ngOnInit(): void {
    const github_login = this.activatedRoute.snapshot.paramMap.get('github_login'); // pega o parâmetro username da rota ativada
    console.log(github_login);
    this.getProfile(github_login);
  }

  getProfile(github_login){
    this.profile = this.profileSvc.getInfoMember(''); // parametro da rota da URL
  }

}
