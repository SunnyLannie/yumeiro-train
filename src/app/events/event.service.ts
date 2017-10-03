import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from './event';


@Injectable()
export class EventService {
  
  private eventsUrl = 'api/events'; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
               .toPromise()
               .then(response => response.json().data as Event[])
               .catch(this.handleError);
  }

  getEvent(id: number): Promise<Event> {
    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //handle errors later
    return Promise.reject(error.message || error);
  }

}
