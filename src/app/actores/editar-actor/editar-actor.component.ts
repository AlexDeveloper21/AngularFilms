import { Component, Input, numberAttribute } from '@angular/core';
import { ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { EditarEntidadComponent } from "../../compartidos/componentes/editar-entidad/editar-entidad.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { ActoresService } from '../actores.service';
@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [EditarEntidadComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css',
  providers: [
    { provide: SERVICIO_CRUD_TOKEN, useClass: ActoresService }
  ]
})
export class EditarActorComponent{

  @Input({transform: numberAttribute})
  id!: number;
  actor?: ActorDTO;

  formularioActores = FormularioActoresComponent

}