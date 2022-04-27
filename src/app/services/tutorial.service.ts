import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private dbPath = '/users';
  usersRef: AngularFirestoreCollection<User>;
  constructor(private db: AngularFirestore) {
    this.usersRef = db.collection(this.dbPath);
   }
   getAll(): AngularFirestoreCollection<User> {
    return this.usersRef;
  }
  create(user: User): any {
    return this.usersRef.add({ ...user });
  }
  update(id: string, data: any): Promise<void> {
    return this.usersRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }
}
