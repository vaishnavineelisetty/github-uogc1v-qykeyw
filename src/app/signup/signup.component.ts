import { Component, OnInit } from '@angular/core';
import { SevicingService } from '../sevicing.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  public Reg: boolean[] = [false, false, false];
  constructor(private Ser: SevicingService, private fb: FormBuilder) {}

  useradd = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    phonenumber: new FormControl('', [
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]{10}/),
      Validators.required
    ])
  });
  ngOnInit(): void {}
  Sign(n: number) {
    for (let i = 0; i < this.Reg.length; i++) this.Reg[i] = false;
    this.Reg[n] = true;
  }
  onSubmitL() {}
  onSubmitS() {
    if (this.useradd.valid) {
      alert('Success');
    }
  }
}
