import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pestana1Component } from './pestana1/pestana1.component';
import { Pestana2Component } from './pestana2/pestana2.component';
import { Pestana3Component } from './pestana3/pestana3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Pestana1Component, Pestana2Component, Pestana3Component],
  exports: [Pestana1Component, Pestana2Component, Pestana3Component]
})
export class MiModuloModule { }
