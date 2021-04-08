import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {PokemonDetail} from "./models/pokemon-detail.model"
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';

const routes: Routes = [
  { path: 'home',component:PokeListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'poke-detail/:id', component: PokeDetailComponent },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
