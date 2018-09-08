import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  id : String;
  data : any[];

  constructor(  private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {

/*     this.id = this.route.snapshot.paramMap.get('id');
    console.log(`id: ${this.id}`);
 */
    this.route.data.subscribe(resolve =>{
      console.log("resolve", resolve)
      this.data = resolve.post;
    })
  
    this.route.paramMap.subscribe((params: ParamMap) => {
        //console.log(params.has('id'));
        console.log("id params:", params.get('id'));
        this.id = params.get('id')
    });
  }

}
