import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private api: ApiService, private _snackBar: MatSnackBar, private router: Router, private http: HttpClient) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Connexion() {
    const username = this.form.value.username;
    const password = this.form.value.password;
    if (username == 'admin' && password == 'admin123') {
      //redirect at dashbord 
      this.fakeloading();
    } else {
      // write error pages
      this.error();
      this.form.reset();
    }
  }
  error() {
    this._snackBar.open('username ou password invalid,merci de verifier', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }

  fakeloading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['addevent']);

    }, 150)

  }
  logindata(login: FormGroup) {
    this.api.getUser().subscribe({
      next: (res) => {
        const user = res.find((a: any) => {
          return a.firstname === this.form.value.username && a.password === this.form.value.password
        });
        if (user) {
          this._snackBar.open('your are successfully login', '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'

          })
          this.fakeloading();
          this.form.reset();
        } else {
          this._snackBar.open('username ou password invalid,merci de verifier', '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'

          })
          this.router.navigate(['login'])
        }
      },

    })
  }

}
