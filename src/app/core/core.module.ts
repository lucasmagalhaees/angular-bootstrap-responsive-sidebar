import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { Tela1Component } from "../telas/tela1/tela1.component";
import { Tela2Component } from "../telas/tela2/tela2.component";
import { Tela3Component } from "../telas/tela3/tela3.component";

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    Tela1Component,
    Tela2Component,
    Tela3Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [FooterComponent, SidebarComponent, NavbarComponent]
})
export class CoreModule {}
