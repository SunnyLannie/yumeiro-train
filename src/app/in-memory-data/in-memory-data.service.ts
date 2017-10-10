import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const events = [
      { id:1, name: 'Shooting Stars' },
      { id:2, name: 'Good Sleep Baby' },
      { id:3, name: 'Growing Storm' }
    ];
    return events;
  };

}
