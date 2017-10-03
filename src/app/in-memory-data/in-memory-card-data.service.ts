import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryCardDataService implements InMemoryDbService {
  createDb(){
    let cards = [
      { id: '1', name: 'Invitation Dive' },
      { id: '2', name: 'It\'s hotter than the sun' },
    ]
    return {cards};
  }

}
