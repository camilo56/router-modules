import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages8',
  templateUrl: './pages8.component.html',
  styleUrls: ['./pages8.component.css']
})
export class Pages8Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  canDeactive(): boolean{
    return window.confirm("Desea salir?");
  }
}
