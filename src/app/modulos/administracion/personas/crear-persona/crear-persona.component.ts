import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PersonaService } from 'src/app/servicios/persona.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ModeloPersona } from 'src/modelos/persona.modelo';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  siteKey:string="";

  fgRegistro:FormGroup = this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'telefono':['',[Validators.required]],
    'recaptcha': ['',[Validators.required]]
 });

  constructor(private fb:FormBuilder, 
              private servicioSeguridad: SeguridadService, 
              private servicioPersona: PersonaService,
              private router: Router,
              
             ) { 
                  this.siteKey="6LcQD00dAAAAAAc3rXGHF06MpIlA62CaFJamXobU";

             }

  ngOnInit(): void {
  }

  CrearUsuario(){
    let nombres=this.fgRegistro.controls['nombres'].value;
    let apellidos=this.fgRegistro.controls['apellidos'].value;
    let correo=this.fgRegistro.controls['correo'].value;
    let telefono=this.fgRegistro.controls['telefono'].value;
    
    let p=new ModeloPersona();
    p.nombres=nombres;
    p.apellidos=apellidos;
    p.correo=correo;
    p.telefono=telefono;

    this.servicioPersona.CrearPersona(p).subscribe((datos:ModeloPersona) => {
      alert("Usuario registrado exitosamente");
      this.router.navigate(["/administracion/buscar-persona"]);
    }, (error:any) =>{
      alert("Error en el registro de usuario");
    });
    
    
   
  }

}

