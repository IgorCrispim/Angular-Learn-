import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-first-component',
  styleUrl: './first-component.css',
  templateUrl: './first-component.html',
})
export class FirstComponent {
  name: string = "Igor"
  objeto = {
    teste1: "teste",
    teste2: "job",
  };
}
