
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:' Trunks',
    power: 10
  }]

@Output()
  onDelete: EventEmitter<string> = new EventEmitter;

  onDeletewCharacter(id?: string): void {
    if  ( !id ) return;
  this.onDelete.emit( id );

  }
}
