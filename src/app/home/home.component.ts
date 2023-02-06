import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/pokemon-basic.model';
import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  $pokemonList: Observable<IPokemon[]> = this.api.pokemonList;
  searchName: string = '';

  constructor(
    private api: PokemonApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewPokemon(url: string){
   

  }

  routeToPokemon = (url : string) => {
    const id = url.charAt(url.length - 2)
    this.router.navigate([id])

  }
  

}
