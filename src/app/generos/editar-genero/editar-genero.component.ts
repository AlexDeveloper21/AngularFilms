import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GenerosService } from '../generos.service';
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { EditarEntidadComponent } from "../../compartidos/componentes/editar-entidad/editar-entidad.component";

@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [EditarEntidadComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css',
  providers: [
    {
      provide: SERVICIO_CRUD_TOKEN, useClass: GenerosService
    }
  ]
})
export class EditarGeneroComponent {

  @Input({ transform: numberAttribute })
  id!: number;

  formularioGenero = FormularioGeneroComponent;

}