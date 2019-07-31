import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTreeModule} from '@angular/cdk/tree';
import { DemoMaterialModule } from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
