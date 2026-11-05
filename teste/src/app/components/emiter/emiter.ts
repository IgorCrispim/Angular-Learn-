import { Component } from '@angular/core';
import { ChaneNumber } from '../chane-number/chane-number';
import { NgIf } from '@angular/common';

@Component({
  imports: [ChaneNumber, NgIf],
  selector: 'app-emiter',
  styleUrl: './emiter.css',
  templateUrl: './emiter.html',
})
export class Emiter {
  numero = 0;
  onChangeNumber(){
    console.log("deu certo")
    this.numero = Math.floor(Math.random() * 10);
  }
}
