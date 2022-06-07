import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';


const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'pokedex', component: PokemonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
