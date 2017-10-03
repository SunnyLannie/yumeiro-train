import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
 
import { Card } from './card';

@Injectable()
export class CardService {
  private cardsUrl = 'api/cards';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getHeroes(): Promise<Card[]> {
    return this.http.get(this.cardsUrl)
               .toPromise()
               .then(response => response.json().data as Card[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purpose
    return Promise.reject(error.message || error);
  }

}
