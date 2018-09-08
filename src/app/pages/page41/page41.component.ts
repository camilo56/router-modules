import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page41',
  templateUrl: './page41.component.html',
  styleUrls: ['./page41.component.css']
})
export class Page41Component implements OnInit {

  users: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private httpClient: HttpClient) { }
  

  ngOnInit() {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users`)
    .subscribe((users: any[]) => {
      this.users = users.map(({id, name, username, email, address:{city}}) => ({id, name, username, email, city}))
    })
  }

  goDetails(userId){
    this.router.navigate(['page4/tres', userId]);
  }
}
