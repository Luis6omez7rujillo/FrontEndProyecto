import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ModeloPersona } from 'src/modelos/persona.modelo';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  id:string='';
  fgValidador:FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required]],
    'telefono':['',[Validators.required]]
  });

  constructor(private fb:FormBuilder, 
              private servicioPersona:PersonaService, 
              private router: Router, 
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarPersona();
  }


  BuscarPersona(){

    this.servicioPersona.ConsultarPersonaPorId(this.id).subscribe((datos:ModeloPersona) => {
      this.fgValidador.controls['id'].setValue(this.id);
      this.fgValidador.controls['nombres'].setValue(datos.nombres);
      this.fgValidador.controls['apellidos'].setValue(datos.apellidos);
      this.fgValidador.controls['correo'].setValue(datos.correo);
      this.fgValidador.controls['telefono'].setValue(datos.telefono);
    },(error:any) =>{
        alert("Información de persona no disponible");
    })
  }

  EditarPersona(){
    let nombres=this.fgValidador.controls['nombres'].value;
    let apellidos=this.fgValidador.controls['apellidos'].value;
    let correo=this.fgValidador.controls['correo'].value;
    let telefono=this.fgValidador.controls['telefono'].value;
    
    let p=new ModeloPersona();
    p.id=this.id;
    p.nombres=nombres;
    p.apellidos=apellidos;
    p.correo=correo;
    p.telefono=telefono;

    this.servicioPersona.ActualizarProducto(p).subscribe((datos:ModeloPersona) => {
      alert("Persona actualizada exitosamente");
      this.router.navigate(["/administracion/listar-personas"]);

    }, (error:any) => {
      alert("Error actualizando la información de persona");
    })
  }

}
