import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  params: any;

  constructor(  private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {

    this.params = this.route.snapshot.paramMap.get('name');
    console.log(`name: ${this.params}`);

  }
}
