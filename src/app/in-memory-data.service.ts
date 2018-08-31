import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: "11dac6ef-ba2d-48bd-8cf9-25539975c516",
        birthdate: 1534553750,
        first_name: "Remind",
        gender: "MALE",
        last_name: "Wang",
        phone_number: "86+15902900001"
      }
    ];
    return {users};
  }
}