import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @Input()
    member: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToMemberProfile(github_login) {
    this.router.navigate([`/members/${github_login}`]);
  }

}
