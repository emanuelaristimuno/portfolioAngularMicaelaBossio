import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CrearComponent } from './componentes/CRUD-Educacion/crear/crear.component';
import { EditarComponent } from './componentes/CRUD-Educacion/editar/editar.component';
import { EliminarComponent } from './componentes/CRUD-Educacion/eliminar/eliminar.component';
import { CrearELComponent } from './componentes/CRUD-ExpLaboral/crear-el/crear-el.component';
import { EditarELComponent } from './componentes/CRUD-ExpLaboral/editar-el/editar-el.component';
import { EliminarELComponent } from './componentes/CRUD-ExpLaboral/eliminar-el/eliminar-el.component';
import { CrearHsComponent } from './componentes/CRUD-Skill/crear-hs/crear-hs.component';
import { EditarHsComponent } from './componentes/CRUD-Skill/editar-hs/editar-hs.component';
import { EliminarHsComponent } from './componentes/CRUD-Skill/eliminar-hs/eliminar-hs.component';
import { CrearSsComponent } from './componentes/CRUD-Skill/crear-ss/crear-ss.component';
import { EditarSsComponent } from './componentes/CRUD-Skill/editar-ss/editar-ss.component';
import { EliminarSsComponent } from './componentes/CRUD-Skill/eliminar-ss/eliminar-ss.component';
import { CrearProyComponent } from './componentes/CRUD-Proyecto/crear-proy/crear-proy.component';
import { EditarProyComponent } from './componentes/CRUD-Proyecto/editar-proy/editar-proy.component';
import { EliminarProyComponent } from './componentes/CRUD-Proyecto/eliminar-proy/eliminar-proy.component';
import { EditarPersonaComponent } from './componentes/acerca-de-mi/CRUD-AcercaDeMi/editar-persona/editar-persona.component';
import { EditarDescripComponent } from './componentes/acerca-de-mi/CRUD-Descripc/editar-descrip/editar-descrip.component';
import { EditarBannerComponent } from './componentes/CRUD-Banner/editar-banner/editar-banner.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // BANNER
  { path: 'editarBanner/:id', component: EditarBannerComponent },
  // PERSONA
  { path: 'editarFoto/:id', component: EditarPersonaComponent },
  // DESCRIPCIÓN PERSONA
  { path: 'editarDescripc/:id', component: EditarDescripComponent },
  // EDUCACIÓN
  { path: 'crear', component: CrearComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'eliminar/:id', component: EliminarComponent },
  // EXP. LABORAL
  { path: 'crearEL', component: CrearELComponent },
  { path: 'editarEL/:id', component: EditarELComponent },
  { path: 'eliminarEL/:id', component: EliminarELComponent },
  // HARD SKILL
  { path: 'crearHS', component: CrearHsComponent },
  { path: 'editarHS/:id', component: EditarHsComponent },
  { path: 'eliminarHS/:id', component: EliminarHsComponent },
  // SOFT SKILL
  { path: 'crearSS', component: CrearSsComponent },
  { path: 'editarSS/:id', component: EditarSsComponent },
  { path: 'eliminarSS/:id', component: EliminarSsComponent },
  // PROYECTO
  { path: 'crearProyecto', component: CrearProyComponent },
  { path: 'editarProyecto/:id', component: EditarProyComponent },
  { path: 'eliminarProyecto/:id', component: EliminarProyComponent },
  // si x error se pasa una ruta q no existe, redirecciona a raíz. 
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
