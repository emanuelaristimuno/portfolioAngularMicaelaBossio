import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CrearComponent } from './componentes/CRUD-Educacion/crear/crear.component';
import { EditarComponent } from './componentes/CRUD-Educacion/editar/editar.component';
import { EliminarComponent } from './componentes/CRUD-Educacion/eliminar/eliminar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'crear', component:CrearComponent},
  {path: 'editar/:id', component:EditarComponent},
  {path: 'eliminar/:id', component:EliminarComponent},
  // si x error se pasa una ruta q no coincide con ninguna, redirecciona a raíz. 
  {path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
