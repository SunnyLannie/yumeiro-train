import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IdolsComponent } from './idols/idols.component';
import { CardsComponent } from './cards/cards.component';

const appRoutes:Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'idols', component: IdolsComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}