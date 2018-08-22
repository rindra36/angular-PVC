import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { VilleService } from '../ville.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbVilleControl = new FormControl('', [
    Validators.required,
    Validators.min(2),
  ]);

  validateInput: boolean;

  matcher = new MyErrorStateMatcher();

  constructor(private ville: VilleService) { }

  ngOnInit() {
  }

  getControl () {
    return this.validateInput = (this.nbVilleControl.status === 'VALID') ? true : false;
  }

  isClickable() {
    this.ville.changeVille(this.nbVilleControl.value);
  }

}
