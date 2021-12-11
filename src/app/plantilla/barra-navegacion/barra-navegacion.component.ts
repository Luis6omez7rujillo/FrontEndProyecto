import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ModeloDatos } from 'src/modelos/datos.modelo';
import { ModeloIdentificar } from 'src/modelos/identificar.modelo';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  sesionIniciada:boolean=false;

  subs: Subscription=new Subscription();

  constructor(private seguridadServicio:SeguridadService) { }

  ngOnInit(): void {

    this.subs=this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar)=>{
    
      this.sesionIniciada=datos.estaIdentificado;
 
    })

  }
}