import { Component } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  constructor(private carritoService: CarritoService) { }

  get productosSeleccionados() {
    return this.carritoService.productosSeleccionados;
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }

  eliminarDelCarrito(producto: any) {
    this.carritoService.eliminarDelCarrito(producto);
  }

  calcularTotal() {
    return this.carritoService.calcularTotal();
  }

  comprar() {
    this.carritoService.vaciarCarrito();
    const total = this.calcularTotal();
  }

  carritoVisible = false;
  toggleCarrito() {
    this.carritoVisible = !this.carritoVisible;
  }
}
