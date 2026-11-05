import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  imports: [FormsModule, NgIf],
  selector: 'app-two-way-binding',
  styleUrl: './two-way-binding.css',
  templateUrl: './two-way-binding.html',
})
export class TwoWayBinding {
  name = ''
}
