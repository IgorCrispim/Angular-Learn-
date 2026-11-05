import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-second',
  styleUrl: './second.css',
  templateUrl: './second.html',
})
export class Second {
  @Input() names: string ='';
  @Input() teste!: {
    trambuco: string,
    trambolho: string,
  };
}
