import { Component } from '@angular/core';
import { NgForOf, NgIf, UpperCasePipe} from '@angular/common';

import { Animal } from '../../Animal';

@Component({
  imports: [NgForOf, NgIf, UpperCasePipe],
  selector: 'app-list-render',
  styleUrl: './list-render.css',
  templateUrl: './list-render.html',
})
export class ListRender {
  coisa: Animal[] = [
    {name: 'tunico', type: 'dog', age: 3},
    {name: 'tinoco', type: 'gato', age: 43},
    {name: 'chico', type: 'bento', age: 20},
    {name: 'areia', type: 'balde', age: 0},
  ];
  animalDetails = ''
  showAge(animal: Animal) {
    this.animalDetails =`o trem ${animal.name} ${animal.age} anos`  
  }
}
