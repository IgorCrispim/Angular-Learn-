import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  imports: [NgStyle, NgClass],
  selector: 'app-diretivas',
  styleUrl: './diretivas.css',
  templateUrl: './diretivas.html',
})
export class Diretivas {
  classe= "titulo_Principal"
}
