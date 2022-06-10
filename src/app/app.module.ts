import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { BodyComponent } from './layout/body/body.component';
import { PokemonComponent } from './components/templates/pokemon/pokemon.component';

//material angular
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { PipesModule } from './components/pipes/pipes.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    BodyComponent,
    PokemonComponent,
  ],
  imports: [
    // Material
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,

    // Others
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
