import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';
import { Celular } from '../model/celular';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-crear-celular',
  templateUrl: './crear-celular.component.html',
  styleUrls: ['./crear-celular.component.css']
})
export class CrearCelularComponent {
  celular: Celular = new Celular(0, '', '', 0, '', '');

  constructor(private apiService: RestApiService, private router: Router) {}

  onSubmit() {
    // Obtener la lista actual de celulares del servicio
    this.apiService.getCelulares().subscribe({
      next: (celulares: Celular[]) => {
        // Calcular el próximo ID
        const maxId = celulares.length > 0 ? Math.max(...celulares.map(c => c.id)) : 0;
        const nuevoCelular = { ...this.celular, id: maxId + 1 };
  
        // Crear el nuevo celular con el ID asignado
        this.apiService.createCelular(nuevoCelular).subscribe({
          next: () => {
            alert('Celular creado con éxito!');
            this.router.navigate(['/consult']);
          },
          error: (err) => {
            console.error('Error al crear el celular:', err);
            alert('Ocurrió un error al crear el celular. Por favor, intenta nuevamente.');
          }
        });
      },
      error: (err) => {
        console.error('Error al obtener la lista de celulares:', err);
        alert('No se pudo calcular el próximo ID.');
      }
    });
  }
  
}
