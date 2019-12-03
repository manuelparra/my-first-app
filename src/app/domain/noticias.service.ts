import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private noticias: Array<String> = [];

  constructor() { }

  agregar(s: string) {
    this.noticias.push(s);
  }

  buscar() {
      return this.noticias;
  }
}
