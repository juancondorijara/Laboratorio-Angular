import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CategoriasComponent } from './vistas/categorias/categorias.component';
import { DulcesysnacksComponent } from './vistas/subcategorias/dulcesysnacks/dulcesysnacks.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { SnacksComponent } from './vistas/productos/snacks/snacks.component';
import { AbarrotesComponent } from './vistas/subcategorias/abarrotes/abarrotes.component';
import { DesayunoComponent } from './vistas/subcategorias/desayuno/desayuno.component';
import { LacteosyhuevosComponent } from './vistas/subcategorias/lacteosyhuevos/lacteosyhuevos.component';
import { QuesosyfiambresComponent } from './vistas/subcategorias/quesosyfiambres/quesosyfiambres.component';
import { HeladosycongeladosComponent } from './vistas/subcategorias/heladosycongelados/heladosycongelados.component';
import { PizzasypreparadosComponent } from './vistas/subcategorias/pizzasypreparados/pizzasypreparados.component';
import { BebidasComponent } from './vistas/subcategorias/bebidas/bebidas.component';
import { CervezalicoresvinosComponent } from './vistas/subcategorias/cervezalicoresvinos/cervezalicoresvinos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClienteComponent,
    ProductoComponent,
    SidenavComponent,
    CategoriasComponent,
    DulcesysnacksComponent,
    PrincipalComponent,
    SnacksComponent,
    AbarrotesComponent,
    DesayunoComponent,
    LacteosyhuevosComponent,
    QuesosyfiambresComponent,
    HeladosycongeladosComponent,
    PizzasypreparadosComponent,
    BebidasComponent,
    CervezalicoresvinosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
