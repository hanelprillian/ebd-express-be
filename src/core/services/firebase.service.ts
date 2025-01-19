import { db } from "@/config/firebase";

export interface IFirestoreService<T> {
  add(data: Omit<T, "id">): Promise<string>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  update(id: string, data: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}

export class FirestoreService<T extends { id?: string }>
  implements IFirestoreService<T> {
  constructor(private collectionName: string) { }

  async add(data: Omit<T, "id">): Promise<string> {
    const docRef = await db.collection(this.collectionName).add(data);
    return docRef.id;
  }

  async getAll(): Promise<T[]> {
    const querySnapshot = await db.collection(this.collectionName).get();
    return querySnapshot.docs.map(
      (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as T)
    );
  }

  async getById(id: string): Promise<T | null> {
    const docRef = db.collection(this.collectionName).doc(id);
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      return { id: docSnap.id, ...docSnap.data() } as T;
    } else {
      return null;
    }
  }

  async update(id: string, data: Partial<T>): Promise<void> {
    const docRef = db.collection(this.collectionName).doc(id);
    await docRef.update(data);
  }

  async delete(id: string): Promise<void> {
    const docRef = db.collection(this.collectionName).doc(id);
    await docRef.delete();
  }
}
