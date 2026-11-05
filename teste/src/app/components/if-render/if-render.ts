import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf],
  selector: 'app-if-render',
  styleUrl: './if-render.css',
  templateUrl: './if-render.html',
})
export class IfRender {
  mostrar: boolean = true
  nome: string = "Igorr"
}
