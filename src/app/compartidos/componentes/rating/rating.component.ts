import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{
  ngOnInit(): void {
    this.ratingAnterior = this.ratingSeleccionado;
  }

  @Input({ required: true, transform: (valor: number) => Array(valor).fill(0) })
  maximoRating!: number[];

  @Input()
  ratingSeleccionado = 0;

  @Output()
  votado = new EventEmitter<number>();

  ratingAnterior = 0;

  manejarMouseEnter(indice: number) {
    this.ratingSeleccionado = indice + 1;
  }

  manejarMouseLeave() {
    this.ratingSeleccionado = this.ratingAnterior;
  }

  manejarClick(indice: number) {
    this.ratingSeleccionado = indice + 1;
    this.ratingAnterior = this.ratingSeleccionado;
    this.votado.emit(this.ratingSeleccionado);
  }
}