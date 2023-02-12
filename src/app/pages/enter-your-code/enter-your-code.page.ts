import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-enter-your-code',
  templateUrl: './enter-your-code.page.html',
  styleUrls: ['./enter-your-code.page.scss'],
})
export class EnterYourCodePage implements OnInit {
  public email: string;
  public formGrp: FormGroup;
  
  constructor(public _fb: FormBuilder, private _shared: RegistrationService) { 
    this.formGrp = _fb.group({
      codeControl: [null, [Validators.required, Validators.maxLength(4), Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
    this.email = this._shared.getEmail();
  }
}
