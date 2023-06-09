import { Component, OnInit } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: any[] = [];
  marcas: string[] = [];
  talles: string[] = [];
  filtroPrecio: string = 'asc';
  filtroMarca: string = '';
  filtroTalle: string = '';
  productosFiltrados: any[] = [];

  constructor(
    private catalogoService: CatalogoService,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.catalogoService.getProductos().subscribe(productos => {
      this.productos = productos;
      this.obtenerMarcasUnicas();
      this.obtenerTallesUnicos();
      this.aplicarFiltros();
    });
  }

  obtenerMarcasUnicas() {
    const marcasSet = new Set<string>();
    this.productos.forEach(producto => {
      marcasSet.add(producto.brand);
    });
    this.marcas = Array.from(marcasSet);
  }
  obtenerTallesUnicos() {
    const tallesSet = new Set<string>();
    this.productos.forEach(producto => {
      tallesSet.add(producto.size);
    });
    this.talles = Array.from(tallesSet);
  }

  aplicarFiltros() {
    this.productosFiltrados = this.productos;

    if (this.filtroMarca) {
      this.productosFiltrados = this.productosFiltrados.filter(producto => producto.brand === this.filtroMarca);
    }
    if (this.filtroTalle) {
      this.productosFiltrados = this.productosFiltrados.filter(producto => producto.size === this.filtroTalle);
    }

    if (this.filtroPrecio === 'asc') {
      this.productosFiltrados = this.productosFiltrados.sort((a, b) => a.price - b.price);
    } else if (this.filtroPrecio === 'desc') {
      this.productosFiltrados = this.productosFiltrados.sort((a, b) => b.price - a.price);
    }
  }
  resetFiltros() {
    this.filtroMarca = '';
    this.filtroPrecio = 'asc';
    this.filtroTalle = '';
    this.aplicarFiltros();
  }
  addToCart(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }
}
