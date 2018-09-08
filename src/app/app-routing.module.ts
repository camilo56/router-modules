import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { Page41Component } from './pages/page41/page41.component';
import { Page42Component } from './pages/page42/page42.component';
import { Page43Component } from './pages/page43/page43.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page6Component } from './pages/page6/page6.component';
import { Pages8Component } from './pages/pages8/pages8.component';
import { AuthGuard } from './auth.guard';
import { CamiloResolveService } from './camilo-resolve.service';
import { CanDeactiveService } from './can-deactive.service';
import { CamiloStrategy } from './custom/camilo-strategy';


//Servicio que retorna true para activar la ruta con un retarde de 2 segundos
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page1/:id', component: Page1Component, resolve: { post: CamiloResolveService} }, //required
  { path: 'page2', component: Page2Component, data: { developer: 'Camilo', dia: 'jueves' }},
  { path: 'page3', component: Page3Component},
  { 
    path: 'page4', component: Page4Component,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'uno',
        component: Page41Component
      },
      {
        path: 'dos',
        component: Page42Component
      },
      {
        path: 'tres/:id',
        component: Page43Component, resolve: { post: CamiloResolveService}
      },
      { path: '', redirectTo: 'uno',pathMatch: 'full'},
    ]
  },
  { path: 'page5', component: Page5Component, canActivate: [AuthGuard]},
  { path: 'page6', component: Page6Component, canActivate: [AuthGuard, AuthGuard]},
  { 
    path: 'page7', loadChildren: './pages/page7/page7.module#Page7Module', 
      canActivate: [AuthGuard], data: { preload: true, delay: 500 }
    },
  { path: 'page8', component: Pages8Component, canDeactivate: [CanDeactiveService]},
  { 
    path: 'page9', loadChildren: './pages/page9/page9.module#Page9Module', 
      canActivate: [AuthGuard], data: { preload: true, delay: 1000 }
    },
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  providers: [AuthGuard, CamiloResolveService, CanDeactiveService],
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: CamiloStrategy, /* enableTracing: true */ } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
