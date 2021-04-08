import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokeListComponent } from 'src/app/components/poke-list/poke-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
