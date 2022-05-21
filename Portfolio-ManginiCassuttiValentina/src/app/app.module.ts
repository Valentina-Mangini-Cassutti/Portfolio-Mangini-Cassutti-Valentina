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
    ExperenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
