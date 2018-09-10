import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: "11dac6ef-ba2d-48bd-8cf9-25539975c516",
        name: "Remind"
      },
      {
        id: "12dac6ef-ba2d-48bd-8cf9-25539975c516",
        name: "Mona"
      }
    ];
    return {users};
  }
}
