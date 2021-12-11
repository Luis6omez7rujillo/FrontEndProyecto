import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from 'src/modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='http://localhost:3000';
  token:String='';


  constructor(private http:HttpClient, private seguridadService: SeguridadService) { 
    this.token=this.seguridadService.ObtenerToken();
  }

  ConsultarProductos():Observable<ModeloProducto[]>{
    return this.http.get<ModeloProducto[]>(`${this.url}/productos`);

  }

  ConsultarProductoPorId(id:string):Observable<ModeloProducto>{
    return this.http.get<ModeloProducto>(`${this.url}/productos/${id}`);

  }

  CrearProducto(producto: ModeloProducto):Observable<ModeloProducto> {
    return this.http.post<ModeloProducto>(`${this.url}/productos`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarProducto(producto: ModeloProducto):Observable<ModeloProducto> {
    return this.http.put<ModeloProducto>(`${this.url}/productos/${producto.id}`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProducto(id: String):Observable<any> {
    return this.http.delete<ModeloProducto>(`${this.url}/productos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}
