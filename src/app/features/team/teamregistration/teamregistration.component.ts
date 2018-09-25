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
  _fName: any;
  _lName: any;
  _email: any;
  _phoneNumber: number;
  _address: any;
  _zip: number;
  _group: any;
  _description: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._teamRegistration = this._formBuilder.group({
      fName:  [null, [Validators.required, Validators.minLength(2)]],
      lName:  [null, [Validators.required, Validators.minLength(2)]],
      email:  [null, [Validators.required]],
      phone:  [null, [Validators.required]],
      group:  [null, [Validators.required]],
      address: this._formBuilder.group({
          roadAddress:  [null, [Validators.required, Validators.minLength(2)]],
          zip:          [null, [Validators.required, Validators.minLength(2)]]
      }),
      description:  [null, []]
    });
  }

  formSubmit(data) {
    console.log(data);
  }

}
