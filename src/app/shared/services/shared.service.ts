import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  emitSelProduct:BehaviorSubject<number> = new BehaviorSubject(0);
  cartObs = this.emitSelProduct.asObservable();
  constructor() { }
}
