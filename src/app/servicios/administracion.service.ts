import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from 'src/modelos/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private http: HttpClient) { }
  Creacion(nombres:string, apellidos:string, correo:string, telefono:string):Observable<ModeloPersona>{
    return this.http.post("http://localhost:3000/personas",{
      nombres:nombres,
      apellidos:apellidos,
      correo:correo,
      telefono:telefono
    },{
      headers: new HttpHeaders()
    })

  }
}
