import { IUser } from "../modules/account/models/login.model";

export namespace StoreState {

  export type User = {
    sessionId: string;
    userEmail: string;
    userId: string;
  }

  export type All = {
    user: User,
  }
}
