import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamregistration',
  templateUrl: './teamregistration.component.html',
  styleUrls: ['./teamregistration.component.css']
})
export class TeamregistrationComponent implements OnInit {

  _teamRegistration: FormGroup;
  _post: any;
  _name: any;
  _email: any;
  _phoneNumber: number;
  _address: any;
  _zip: number;
  _group: any;
  _description: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._teamRegistration = this._formBuilder.group({
      email:  [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      passwordMatch: this._formBuilder.group({
          password:  [null, [Validators.required]],
          confPassword: [null, [Validators.required]]
      }),
      personalInfo: this._formBuilder.group({
          name:     [null, [Validators.required, Validators.minLength(2)]],
          phone:    [null, [Validators.required]],
          country:  [null, [Validators.required]],
          zip:      [null, [Validators.required, Validators.minLength(2)]]
      })
    });
  }

  formSubmit(data) {
    // console.log(data);
    console.log(this._teamRegistration.controls.email);
  }

}
