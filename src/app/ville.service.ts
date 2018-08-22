import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private nbVille = new BehaviorSubject(2);
  currentVille = this.nbVille.asObservable();

  constructor() { }

  changeVille(nombre: number) {
    this.nbVille.next(nombre);
  }
}
