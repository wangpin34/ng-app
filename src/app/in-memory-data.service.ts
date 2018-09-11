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
    const addrs = [
      {
        id: "21dac6ef-ba2d-48bd-8cf9-25539975c516",
        tag: "家",
        name: "水帘洞",
        detail: "傲來國花果山水簾洞街道辦事處水簾洞三單元101室",
        contact: "孫悟空",
        phoneNumber: 3600
      },
      {
        id: "22dac6ef-ba2d-48bd-8cf9-25539975c516",
        tag: "公司",
        name: "御馬監",
        detail: "天庭御馬監",
        contact: "孫悟空",
        phoneNumber: 1024
      }
    ]
    return {users, addrs};
  }
}
