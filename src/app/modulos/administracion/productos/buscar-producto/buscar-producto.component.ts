import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ModeloProducto } from 'src/modelos/producto.modelo';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

ListaProductos:ModeloProducto[]=[];

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.ObtenerListaProductos();
  }

  ObtenerListaProductos(){
    this.productoServicio.ConsultarProductos().subscribe((datos:ModeloProducto[])=>{
      this.ListaProductos=datos;
    })
  }

}
