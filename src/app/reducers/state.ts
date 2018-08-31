export class UI {
  navLeftVisible: boolean;
}

export class User {
  id: string;
  name: string;
};

export interface State {
  ui: UI;
  users: Array<User>;
}
