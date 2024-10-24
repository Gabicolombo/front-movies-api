import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  private readonly url = 'http://localhost:2828';

  constructor(private readonly http: HttpClient) {}

  getMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/movies`);
  }
}
