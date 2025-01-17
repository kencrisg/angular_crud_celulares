import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsultComponent } from './consult/consult.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterOutlet, HomeComponent, ConsultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'celulares-app';
}
