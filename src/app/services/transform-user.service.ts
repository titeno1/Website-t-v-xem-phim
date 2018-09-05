import { Injectable } from '@angular/core';
import { NguoiDung } from '../Model/nguoidung';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransformUserService {
  private infoUser: NguoiDung;
  private data = new BehaviorSubject(this.infoUser);
  transform = this.data.asObservable();
  TransformUser(user) {
    this.data.next(user);
  }
  constructor() { }
}
