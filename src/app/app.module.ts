import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCardDataService }  from './in-memory-data/in-memory-card-data.service';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { IdolsComponent } from './idols/idols.component';

import { CardService } from './cards/card.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    IdolsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryCardDataService),
  ],
  providers: [ CardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
