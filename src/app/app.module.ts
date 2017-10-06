import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from '../../in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data/in-memory-data.service';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { IdolsComponent } from './idols/idols.component';

import { CardService } from './cards/card.service';
import { EventService } from './events/event.service';
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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    CardService,
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
