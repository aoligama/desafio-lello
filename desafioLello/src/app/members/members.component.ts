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
    this.getMembers();
  }

  getMembers(){
    this.allmembers = this.memberSvc.getAllMembers()
  }

}
