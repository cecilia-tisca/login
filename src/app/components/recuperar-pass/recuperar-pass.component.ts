import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ErrorfirebaseService } from 'src/app/service/errorfirebase.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.css']
})
export class RecuperarPassComponent implements OnInit {
  recuperarUser: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, 
    private afAuth: AngularFireAuth,
    private toastr: ToastrService, 
    private router: Router,
    private Errorfirebase : ErrorfirebaseService) {
      this.recuperarUser = this.fb.group({
        correo: ['', Validators.required] 
      })
     }

  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarUser.value.correo;

    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.toastr.info('Se envió un correo para restablecer su contraseña', 'Recuperar Contraseña')
      this.router.navigate(['/login'])
    }).catch((error) => {
      this.loading = false;
      this.toastr.error(this.Errorfirebase.Errorfirebase(error.code), 'Error');
    })
  }

}
