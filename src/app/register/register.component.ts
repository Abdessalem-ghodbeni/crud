import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  signupUser: any;
  constructor(private fb: FormBuilder, private _router: Router, private http: HttpClient, private api: ApiService) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      class: ['', Validators.required],
      university: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  ngOnInit(): void {
  }


  register() {

    this.signupUser = this.registerForm.value.firstname;
    if (this.registerForm.valid) {
      this.api.postUser(this.registerForm.value).subscribe({
        next: (res) => {
          alert("count created successfully ! welcome");
          this.registerForm.reset();
          this._router.navigate(['login']);

        },
        error: () => {
          alert("error while crating this acount")
        }
      })
    }


  }














}
