import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SaludoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-proyecto-angular';
}
