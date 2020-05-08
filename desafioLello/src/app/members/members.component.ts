import { MembersApiService } from './member/info/members-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private memberSvc: MembersApiService) { }
  allmembers: Observable<any>;
  
  ngOnInit(): void {
    this.getMembers(''); // busca todos os membros ao iniciar a aplicação
  }

  getMembers(github_login: string){
    this.allmembers = this.memberSvc.getAllMembers(github_login) // acessa serviço de busca dos membros
  }

}