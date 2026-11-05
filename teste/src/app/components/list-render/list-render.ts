import { Component, inject } from '@angular/core';
import { NgForOf, NgIf, UpperCasePipe} from '@angular/common';

import { Animal } from '../../Animal';
import { List } from '../../service/list';

@Component({
  imports: [NgForOf, NgIf, UpperCasePipe],
  selector: 'app-list-render',
  styleUrl: './list-render.css',
  templateUrl: './list-render.html',
})
export class ListRender {
  private list = inject(List);
  Delete = false
  excluir(animal: Animal) {
    this.Delete = !this.Delete
    this.removeAnimal(animal)
  }

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

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...' + animal.name)
    this.coisa = this.list.remove(this.coisa, animal)
  }
}
