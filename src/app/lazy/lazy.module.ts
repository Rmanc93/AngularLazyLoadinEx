import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { Lazy1Component } from '../lazy1/lazy1.component';

@NgModule({
  declarations: [Lazy1Component],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
