import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';
import { Celular } from '../model/celular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-editar-celular',
  templateUrl: './editar-celular.component.html',
  styleUrls: ['./editar-celular.component.css']
})
export class EditarCelularComponent implements OnInit {
  celular: Celular = new Celular(0, '', '', 0, 0, 0);

  constructor(
    private apiService: RestApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getCelularById(id).subscribe((data: Celular) => {
      this.celular = data;
    });
  }

  onSubmit() {
    this.apiService.updateCelular(this.celular.id, this.celular).subscribe(() => {
      alert('Celular actualizado con éxito!');
      this.router.navigate(['/consult']);
    });
  }
}
