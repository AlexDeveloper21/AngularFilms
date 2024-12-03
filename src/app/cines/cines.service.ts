import { inject, Injectable } from '@angular/core';
import { IServicioCRUD } from '../compartidos/interfaces/IServicioCRUD';
import { CineCreacionDTO, CineDTO } from './cines';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { environment } from '../../environments/environment.development';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class CinesService implements IServicioCRUD<CineDTO, CineCreacionDTO>{

  constructor() { }

  private http = inject(HttpClient)
  private urlBase = environment.apiURL + '/cines';


  obtenerPaginado(paginacion: PaginacionDTO): Observable<HttpResponse<CineDTO[]>> {
    let queryParams = construirQueryParams(paginacion);

    return this.http.get<CineDTO[]>(this.urlBase, {params: queryParams, observe: 'response'})
  }
  public obtenerPorId(id: number): Observable<CineDTO>{
    return this.http.get<CineDTO>(`${this.urlBase}/${id}`)
  }

  public actualizar(id: number, entidad: CineCreacionDTO){

    return this.http.put(`${this.urlBase}/${id}`, entidad);
  }

  public crear(entidad: CineCreacionDTO){

    return this.http.post(this.urlBase, entidad);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
