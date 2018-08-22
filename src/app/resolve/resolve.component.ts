import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VilleService } from '../ville.service';

export interface ValeurElement {
  valeur: number;
}

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.scss']
})
export class ResolveComponent implements OnInit {

  nbVille: number;

  character = String.fromCharCode(65);

  constructor(private route: ActivatedRoute, private ville: VilleService) {
  }

  ngOnInit() {
    this.ville.currentVille.subscribe(nbVille => this.nbVille = nbVille);
  }

  createRange(number) {
    let items: any[] = [];
    for (let i = 1; i <= number; i++) {
      let char = String.fromCharCode(64 + i);
      if (i >= 27) {
        char = String.fromCharCode(70 + i);
      }
      items.push(char);
    }
    return items;
  }

  numberToChar(number) {
    return String.fromCharCode(64 + number);
  }

  getValue() {
    console.log(this.nbVille);
  }
}
