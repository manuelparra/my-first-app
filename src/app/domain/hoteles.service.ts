import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  private hoteles: Array<String> = [];

  constructor() { }

  add(s: string) {
    this.hoteles.push(s);
  }

  find() {
    return this.hoteles;
  }
}
