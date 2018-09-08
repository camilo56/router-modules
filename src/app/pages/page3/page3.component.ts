import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  
  params: {keyName: string, value: string}[] = [];
  constructor(  private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.params = params.keys.map(key => ({keyName: key, value: params.get(key)}))
    })

  }
}
