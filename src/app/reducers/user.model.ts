export class User {
  id: string;
  name: string;
  tempId: string;
  
  constructor(id: string, name: string, tempId: string){
    this.id = id;
    this.name = name;
    this.tempId = tempId;
  }
};