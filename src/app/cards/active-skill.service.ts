import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ActiveSkill } from './skill';

@Injectable()
export class ActiveSkillService {
  private activeSkillsUrl = 'api/active-skills'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getActiveSkills(): Promise<ActiveSkill[]> {
    return this.http.get(this.activeSkillsUrl)
               .toPromise()
               .then(response => response.json().data as ActiveSkill[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}