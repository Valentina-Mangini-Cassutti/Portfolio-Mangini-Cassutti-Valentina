import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { ComponentsComponent } from './components/components.component';
import { GitHubComponent } from './components/git-hub/git-hub.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './login/login.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { YPComponent } from './components/yp/yp.component';
import { ExperenciaComponent } from './components/experencia/experencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { UTNLOGOComponent } from './components/utn-logo/utn-logo.component';
import { LogoFcefynComponent } from './components/logo-fcefyn/logo-fcefyn.component';
import { IntegralCapacitandoComponent } from './components/integral-capacitando/integral-capacitando.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    ComponentsComponent,
    GitHubComponent,
    BannerComponent,
    LoginComponent,
    InformacionComponent,
    YPComponent,
    ExperenciaComponent,
    EducacionComponent,
    UTNLOGOComponent,
    LogoFcefynComponent,
    IntegralCapacitandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
