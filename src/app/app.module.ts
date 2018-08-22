import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule
  } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { ResolveComponent } from './resolve/resolve.component';

import { VilleService } from './ville.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    HeaderComponent,
    ResolveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
  ],
  providers: [VilleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
