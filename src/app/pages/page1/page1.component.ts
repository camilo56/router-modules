import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  id : String;

  constructor(  private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {

/*     this.id = this.route.snapshot.paramMap.get('id');
    console.log(`id: ${this.id}`);
 */
    this.route.paramMap.subscribe((params: ParamMap) => {
        console.log(params.has('id'));
        console.log(params.get('id'));
        this.id = params.get('id')
    });
  }

}
