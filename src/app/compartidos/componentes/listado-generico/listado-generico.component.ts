import { Component, Input, OnInit } from '@angular/core';
import { CargandoComponent } from "../cargando/cargando.component";

@Component({
  selector: 'app-listado-generico',
  standalone: true,
  imports: [CargandoComponent],
  templateUrl: './listado-generico.component.html',
  styleUrl: './listado-generico.component.css'
})
export class ListadoGenericoComponent implements OnInit {
  @Input({required: true})
  listado: any;

  ngOnInit(): void {
    console.log("Listado generico Component ", this.listado);
  }
}
