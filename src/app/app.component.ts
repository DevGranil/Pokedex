import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from './services/pokemon-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';

  constructor(private api: PokemonApiService){}
  
  ngOnInit(): void {
      this.api.getAllPokemonData(150);
  }
}
