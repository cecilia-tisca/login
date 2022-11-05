import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ErrorfirebaseService } from 'src/app/service/errorfirebase.service';



@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {
  registrarUser: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, 
    private afAuth: AngularFireAuth,
    private toastr: ToastrService, 
    private router: Router,
    private Errorfirebase : ErrorfirebaseService ) {
    this.registrarUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8)]],
      repetirpassword: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  registrar() {
    const email = this.registrarUser.value.email
    const password = this.registrarUser.value.password
    const repetirpassword = this.registrarUser.value.repetirpassword;

    if(password !== repetirpassword){
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error');
      // alert('El usuario fue registrado con Exito');
      // alert('Las contraseñas ingresadas deben ser las mismas')
      return;
    }

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.loading = false;
      this.router.navigate(['/login']);
      console.log(user);

    }).catch((error) => {
      this.loading = false;
      console.log(error);
      //alert(this.Errorfirebase.Errorfirebase(error.code));
      this.toastr.error(this.Errorfirebase.Errorfirebase(error.code), 'Error');
    })
  }


}
