import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),

    },
    {
        path: ':id',
        loadChildren: () => import('./pokemon-info/pokemon-info.module').then(m => m.PokemonInfoModule),

    },
]