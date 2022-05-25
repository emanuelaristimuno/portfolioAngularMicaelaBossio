import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { InfoAcadComponent } from './componentes/info-acad/info-acad.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { BtnEditarComponent } from './componentes/btn-editar/btn-editar.component';
import { BtnAgregarComponent } from './componentes/btn-agregar/btn-agregar.component';
import { BtnDeleteComponent } from './componentes/btn-delete/btn-delete.component';
import { FormularioAccesoComponent } from './componentes/formulario-acceso/formulario-acceso.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ImgHastaProntoComponent } from './componentes/img-hasta-pronto/img-hasta-pronto.component';
import { SkillsSoftComponent } from './componentes/skills-soft/skills-soft.component';

const appRoutes: Routes=[
  {path:'home', component: HomeComponent},
  {path:'formulario', component: FormularioAccesoComponent},
  {path:'btnAdd', component: BtnAgregarComponent},
  {path:'btnEdit', component: BtnEditarComponent},
  {path:'btnDelete', component: BtnDeleteComponent},
  {path:'imgHastaPronto', component: ImgHastaProntoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BannerComponent,
    AcercaDeMiComponent,
    ExpLaboralComponent,
    InfoAcadComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    LogoutComponent,
    BtnEditarComponent,
    BtnAgregarComponent,
    BtnDeleteComponent,
    FormularioAccesoComponent,
    HomeComponent,
    ImgHastaProntoComponent,
    SkillsSoftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
