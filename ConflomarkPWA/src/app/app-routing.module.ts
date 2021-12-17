import { PrincipalComponent } from './vistas/principal/principal.component';
import { CategoriasComponent } from './vistas/categorias/categorias.component';
import { AbarrotesComponent } from './vistas/subcategorias/abarrotes/abarrotes.component';
import { DesayunoComponent } from './vistas/subcategorias/desayuno/desayuno.component';
import { LacteosyhuevosComponent } from './vistas/subcategorias/lacteosyhuevos/lacteosyhuevos.component';
import { QuesosyfiambresComponent } from './vistas/subcategorias/quesosyfiambres/quesosyfiambres.component';
import { HeladosycongeladosComponent } from './vistas/subcategorias/heladosycongelados/heladosycongelados.component';
import { PizzasypreparadosComponent } from './vistas/subcategorias/pizzasypreparados/pizzasypreparados.component';
import { DulcesysnacksComponent } from './vistas/subcategorias/dulcesysnacks/dulcesysnacks.component';
import { BebidasComponent } from './vistas/subcategorias/bebidas/bebidas.component';
import { CervezalicoresvinosComponent } from './vistas/subcategorias/cervezalicoresvinos/cervezalicoresvinos.component';
import { SnacksComponent } from './vistas/productos/snacks/snacks.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { DummyComponent } from './componentes/dummy/dummy.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'principal', component: PrincipalComponent},
  {path:'categorias', component: CategoriasComponent},
  {path:'abarrotes', component: AbarrotesComponent},
  {path:'desayuno', component: DesayunoComponent},
  {path:'lacteosyhuevos', component: LacteosyhuevosComponent},
  {path:'quesosyfiambres', component: QuesosyfiambresComponent},
  {path:'heladosycongelados', component: HeladosycongeladosComponent},
  {path:'pizzasypreparados', component: PizzasypreparadosComponent},
  {path:'dulcesysnacks', component: DulcesysnacksComponent},
  {path:'bebidas', component: BebidasComponent},
  {path:'cervezalicoresvinos', component: CervezalicoresvinosComponent},
  {path:'snacks', component: SnacksComponent},
  {path:'cliente', component: ClienteComponent},
  {path:'producto', component: ProductoComponent},
  {path:'dummy', component: DummyComponent},
  {path:'home', component: DummyComponent},
  {path:'services', component: DummyComponent},
  {path:'projects', component: DummyComponent},
  {path:'aboutus', component: DummyComponent},
  {path:'singup', component: DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
