import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './pages/main-pages.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MainPageComponent,


  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
