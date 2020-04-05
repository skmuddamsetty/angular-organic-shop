import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import * as firebase from "firebase";
import { AppUser } from "./models/app-user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private db: AngularFirestore) {}

  save(user: firebase.User) {
    let userDoc: AngularFirestoreDocument<any>;
    userDoc = this.db.doc<any>("users/" + user.uid);
    userDoc.set({ name: user.displayName, email: user.email });
  }

  get(uid: string): AngularFirestoreDocument<AppUser> {
    return this.db.doc<any>("users/" + uid);
  }
}
