import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CrearComponent } from './componentes/CRUD-Educacion/crear/crear.component';
import { EditarComponent } from './componentes/CRUD-Educacion/editar/editar.component';
import { EliminarComponent } from './componentes/CRUD-Educacion/eliminar/eliminar.component';
import { CrearELComponent } from './componentes/CRUD-ExpLaboral/crear-el/crear-el.component';
import { EditarELComponent } from './componentes/CRUD-ExpLaboral/editar-el/editar-el.component';
import { EliminarELComponent } from './componentes/CRUD-ExpLaboral/eliminar-el/eliminar-el.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // EDUCACIÓN
  { path: 'crear', component: CrearComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'eliminar/:id', component: EliminarComponent },
  // EXP. LABORAL
  {path: 'crearEL', component: CrearELComponent},
  {path:'editarEL/:id', component: EditarELComponent},
  {path: 'eliminarEL/:id', component: EliminarELComponent},
  // si x error se pasa una ruta q no coincide con ninguna, redirecciona a raíz. 
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
