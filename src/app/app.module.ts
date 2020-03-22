import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tela1Component } from './telas/tela1/tela1.component';
import { Tela2Component } from './telas/tela2/tela2.component';
import { Tela3Component } from './telas/tela3/tela3.component';
import { AppRoutingModule } from './app-routing.module';
import { TelasRoutingModule } from './telas/telas-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelasRoutingModule,
    CoreModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
