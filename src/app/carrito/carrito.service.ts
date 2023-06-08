import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CarritoService {
    productosSeleccionados: any[] = [];

    agregarAlCarrito(producto: any) {
        const productoExistente = this.productosSeleccionados.find(p => p.id === producto.id);

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            this.productosSeleccionados.push({ ...producto, cantidad: 1 });
        }
        console.log(this.productosSeleccionados)
    }

    eliminarDelCarrito(producto: any) {
        const productoExistente = this.productosSeleccionados.find(p => p.id === producto.id);
    
        if (productoExistente) {
          if (productoExistente.cantidad > 1) {
            productoExistente.cantidad -= 1;
          } else {
            const index = this.productosSeleccionados.findIndex(p => p.id === producto.id);
            if (index !== -1) {
              this.productosSeleccionados.splice(index, 1);
            }
          }
        }
      }

    calcularTotal() {
        let total = 0;

        for (const producto of this.productosSeleccionados) {
            total += producto.price * producto.cantidad;
        }

        return total;
    }

    vaciarCarrito() {
        this.productosSeleccionados = [];
    }
}
