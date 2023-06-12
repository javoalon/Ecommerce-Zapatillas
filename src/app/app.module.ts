import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo-productos/catalogo-productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NgIconsModule } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';
import { bootstrapCart3, bootstrapTrash3 } from '@ng-icons/bootstrap-icons';
import { CarritoService } from './carrito/carrito.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ContactoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgIconsModule.withIcons({ bootstrapCart3, bootstrapTrash3 }),
  ],
  providers: [CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
