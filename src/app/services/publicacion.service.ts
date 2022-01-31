import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  

  constructor(private afs: AngularFirestore) { }

  getContactos(): Observable<any[]>{
    const refContactos = this.afs.collection('publicaciones');
    return refContactos.valueChanges();
  }
}
