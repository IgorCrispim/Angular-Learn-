import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { Second } from './components/second/second';
import { Diretivas } from './components/diretivas/diretivas';
import { IfRender } from './components/if-render/if-render';
import { Eventos } from './components/eventos/eventos';
import { Emiter } from './components/emiter/emiter';
import { ListRender } from './components/list-render/list-render';
import { Pipes } from './components/pipes/pipes';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';

@Component({
  imports: [RouterOutlet, FirstComponent, Second, Diretivas, IfRender, Eventos, Emiter, ListRender, Pipes, TwoWayBinding],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('teste');
  username="Duda"
  user = {
    trambuco:"vh",
    trambolho:"ll",
  };
    
}