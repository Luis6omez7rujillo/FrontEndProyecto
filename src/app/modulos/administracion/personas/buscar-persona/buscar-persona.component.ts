import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ModeloPersona } from 'src/modelos/persona.modelo';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  ListaPersonas:ModeloPersona[]=[];

  constructor(private personaServicio: PersonaService) { }

  ngOnInit(): void {
    this.ObtenerListaPersonas();
  }

  ObtenerListaPersonas(){
    this.personaServicio.ConsultarPersonas().subscribe((datos:ModeloPersona[])=>{
      this.ListaPersonas=datos;
    })
  }


}
