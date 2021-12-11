import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperacionClaveComponent } from './recuperacion-clave/recuperacion-clave.component';

const routes: Routes = [
  {
    path:'cambio-clave',
    component: CambioClaveComponent
  },
  {
    path:'identificacion',
    component: IdentificacionComponent
  },
  {
    path:'cerrar-sesion',
    component: CerrarSesionComponent
  },
  {
    path:'recuperacion-clave',
    component: RecuperacionClaveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
