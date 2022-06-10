import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Definimos el array
  peliculas = [
      {
          "pelicula": "Batman v. Superman",
          "director": "Zack Snider",
          "anio": "2016"
      },
      {
          "pelicula": "La verdad duele",
          "director": "Will Smith",
          "anio": "2015"
      },
      {
          "pelicula": "Una historia real",
          "director": "Desconocido",
          "anio": "2014"
      }];
}
