import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './pages/home/home.component';
import { Graph3dComponent } from './pages/graph3d/graph3d.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Graph3dComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MatGridListModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
