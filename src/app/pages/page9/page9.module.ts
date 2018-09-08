import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page9Component } from './page9/page9.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: Page9Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page9Component]
})
export class Page9Module { }
