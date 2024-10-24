import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MoviesApiService } from '../service/movies-api.service';
import { Movie } from '../models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  public moviesData: Movie[] = [];

  constructor(public service: MoviesApiService){}

  ngOnInit(): void {
    
    this.service.getMovie().subscribe({
      next: (data) => {
       this.moviesData = data;
      },
      error: (error) => {
        console.log('error');
        console.log(error);
      },
    });
  }
}
