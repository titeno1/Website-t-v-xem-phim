import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransformTrailerService {
  private popupTrailer;
  private data = new BehaviorSubject(this.popupTrailer);
  transform = this.data.asObservable();
  TransformURL(popupTrailer) {
    this.data.next(popupTrailer);
  }
  constructor() { }
}
