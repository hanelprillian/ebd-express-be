import { FirestoreService } from "@/core/services/firebase.service";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export class UserService extends FirestoreService<User> {
  constructor() {
    super("users");
  }
}
