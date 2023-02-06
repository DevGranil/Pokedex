import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule, Routes } from '@angular/router';
import { TableHeaderComponent } from './table-header/table-header.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent, 
    SearchComponent, 
    FiltersComponent, 
    TableHeaderComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class HomeModule { }
