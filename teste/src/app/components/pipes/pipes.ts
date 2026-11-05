import { Component } from '@angular/core';
import { UpperCasePipe, TitleCasePipe, DatePipe} from '@angular/common';


@Component({
  imports: [UpperCasePipe, TitleCasePipe, DatePipe],
  selector: 'app-pipes',
  styleUrl: './pipes.css',
  templateUrl: './pipes.html',
})
export class Pipes {
  today = new Date();
}
