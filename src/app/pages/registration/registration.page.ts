import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public formGrp: FormGroup;

  constructor(public _fb: FormBuilder, private _shared: RegistrationService) { 
    this.formGrp = _fb.group({
      emailControl: ['', [Validators.required, Validators.email]],
      passControl: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}/
      )]],
      passConfirmControl: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}/
      )]]
    }),
    {
      Validators: this.mustMatch('passControl', 'passConfirmControl')
    }
  }

  public doSubmit(): void {
    console.log(this.formGrp.value.emailControl)
  }

  public mustMatch(pass1: string, pass2: string): any {
    return () => {
      if (pass1 !== pass2)
        return { match_error: 'Value does not match' };
      return null;
    };
  }

  ngOnInit(): void {
    this._shared.setEmail(this.formGrp.value.emailControl)
  }

}
