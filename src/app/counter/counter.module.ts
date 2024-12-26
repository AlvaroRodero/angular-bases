//agrupador donde voy a tener las deficiones de los componentes del counter

import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
 declarations: [

 ],
 imports:[
  CounterComponent
 ],
 exports: [
  CounterComponent
 ]
})

export class CounterModule {}
