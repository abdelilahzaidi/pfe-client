import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private sideBarState = new BehaviorSubject<boolean>(false);

  constructor() { }

  getsideBarState() {
    return this.sideBarState.asObservable();
  }

  togglesideBarState() {
    this.sideBarState.next(!this.sideBarState.getValue());
  }
}
