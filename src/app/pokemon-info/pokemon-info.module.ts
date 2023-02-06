import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonInfoComponent
  }
]


@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PokemonInfoModule { }
