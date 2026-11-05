import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf],
  selector: 'app-eventos',
  styleUrl: './eventos.css',
  templateUrl: './eventos.html',
})
export class Eventos {
  show: boolean = false;

  showMensagem(){
    this.show = !this.show
  }
}
