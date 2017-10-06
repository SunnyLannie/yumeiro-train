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
  	const url = `${this.eventsUrl}/${id}`;
  	return this.http.get(url)
  	           .toPromise()
  	           .then(response => response.json() as Event)
  	           .catch(this.handleError);
  }

  updateEvent(event: Event): Promise<Event> {
    const url = `${this.eventsUrl}/${event.id}`;
    return this.http.put(url, JSON.stringify(event), {headers:this.headers})
               .toPromise()
               .then(() => event)
               .catch(this.handleError);
  }

  createEvent(name: string): Promise<Event> {
    return this.http.post(this.eventsUrl, JSON.stringify({name:name}),
    	                    {headers: this.headers})
                    .toPromise()
                    .then(response => response.json().data as Event)
                    .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //handle errors later
    return Promise.reject(error.message || error);
  }

}
