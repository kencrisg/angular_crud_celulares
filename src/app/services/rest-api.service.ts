import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Celular } from '../model/celular';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  // GET: Listar celulares
  getCelulares(): Observable<Celular[]> {
    return this.http.get<Celular[]>(`${this.apiURL}/celulares`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // GET: Obtener un celular por ID
  getCelularById(id: string): Observable<Celular> {
    return this.http.get<Celular>(`${this.apiURL}/celulares/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // POST: Crear un celular
  createCelular(celular: Celular): Observable<Celular> {
    return this.http.post<Celular>(`${this.apiURL}/celulares`, JSON.stringify(celular), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // PUT: Actualizar un celular
  updateCelular(id: string, celular: Celular): Observable<Celular> {
    return this.http.put<Celular>(`${this.apiURL}/celulares/${id}`, JSON.stringify(celular), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // DELETE: Eliminar un celular
  deleteCelular(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/celulares/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
