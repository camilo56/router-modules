import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(info => console.log(info))
  }

  goHome(){
    this.router.navigate(['/home']);
  }
  
  goPage1(id){
    this.router.navigate(['/page1', id]);
  }

  goPage3(){
    this.router.navigate(['/page3', {name: "camilo"}]);
  }
}
