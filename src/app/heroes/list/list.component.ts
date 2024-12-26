import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deleteHero?: string;
  // es lo mismo que public deleteHero?: string = '';

removeLastHero():void {
  this.deleteHero = this.heroNames.pop();
}


}
