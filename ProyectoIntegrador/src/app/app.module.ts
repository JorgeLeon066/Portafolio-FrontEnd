import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './header/nav/nav.component';
import { LoginComponent } from './header/login/login.component';
import { ContactoComponent } from './header/contacto/contacto.component';
import { MainComponent } from './main/main/main.component';
import { BannerComponent } from './main/banner/banner.component';
import { SobreMiComponent } from './main/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './main/educacion/educacion.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ProyectosComponent } from './main/proyectos/proyectos.component';
import { ExperienciaComponent } from './main/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ContactoComponent,
    MainComponent,
    BannerComponent,
    SobreMiComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
