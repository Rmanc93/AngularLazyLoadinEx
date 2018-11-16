import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy1Component } from '../lazy1/lazy1.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: Lazy1Component }
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
