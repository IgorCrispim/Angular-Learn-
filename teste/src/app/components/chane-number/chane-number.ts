import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-chane-number',
  styleUrl: './chane-number.css',
  templateUrl: './chane-number.html',
})
export class ChaneNumber {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  handleClick() {
    console.log("mudou")
    this.changeNumber.emit();
  }
}
