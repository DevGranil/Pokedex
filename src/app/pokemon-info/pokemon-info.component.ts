import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {
  $pokemon: Observable<any>;
  error: boolean = false;


  constructor(
    private api: PokemonApiService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params.id;
    this.$pokemon = this.api.getPokemon(id).pipe(
      catchError(err => {
        this.error = true;
        throw 'Pokemon not found';
      })
    );

  }

}
