import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ErrorfirebaseService } from 'src/app/service/errorfirebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, 
    private afAuth: AngularFireAuth,
    private toastr: ToastrService, 
    private router: Router,
    private Errorfirebase : ErrorfirebaseService ) {
     this.loginUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
     })
     }

  ngOnInit(): void {
  }

login(){
  const email = this.loginUsuario.value.email;
  const password = this.loginUsuario.value.password;

  this.loading = true;
  this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
    this.router.navigate(['/dashboard'])
  }).catch((error) => {
    this.loading = false;
    console.log(error);
    this.toastr.error(this.Errorfirebase.Errorfirebase(error.code), 'Error');
  })

}
}
