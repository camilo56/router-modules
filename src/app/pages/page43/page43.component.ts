import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page43',
  templateUrl: './page43.component.html',
  styleUrls: ['./page43.component.css']
})
export class Page43Component implements OnInit {

  id : String;
  data : any[];

  constructor(  private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    });

    this.route.data.subscribe(resolve =>{
      this.data = resolve.post;
    })
  }

}
