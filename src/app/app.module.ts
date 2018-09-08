import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Componentes-------- */
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page41Component } from './pages/page41/page41.component';
import { Page42Component } from './pages/page42/page42.component';
import { Page43Component } from './pages/page43/page43.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page6Component } from './pages/page6/page6.component';
import { Pages8Component } from './pages/pages8/pages8.component';

/* Modulos-------- */
import { MiModuloModule } from './mi-modulo/mi-modulo.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    PageNotFoundComponent,
    Page4Component,
    Page41Component,
    Page42Component,
    Page43Component,
    Page5Component,
    Page6Component,
    Pages8Component
  ],
  imports: [
    BrowserModule,
    MiModuloModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
