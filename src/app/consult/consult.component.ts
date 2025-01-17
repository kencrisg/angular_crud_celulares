import { Component } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Celular } from '../model/celular';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, CommonModule],
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.css',
})
export class ConsultComponent {
  celulares: Celular[] = [];

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.restApi.getCelulares().subscribe((data: Celular[]) => {
      this.celulares = data;
    });
  }

  eliminarCelular(id: number) {
    if (confirm('¿Estás seguro de eliminar este celular?')) {
      this.restApi.deleteCelular(id).subscribe(() => {
        this.celulares = this.celulares.filter((c) => c.id !== id);
      });
    }
  }
}
