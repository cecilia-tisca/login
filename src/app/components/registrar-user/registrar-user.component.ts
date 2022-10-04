import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {
  registrarUser: FormGroup;

  constructor(private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService, 
    private router: Router ) {
    this.registrarUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
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
      alert('El usuario fue registrado con Exito');
      alert('Las contraseñas ingresadas deben ser las mismas')
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.router.navigate(['/login']);
      console.log(user);
    }).catch((error) => {
      console.log(error);
      alert(this.firebaseError(error.code));
    })
  }

  firebaseError(code: String){
    switch(code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      case 'auth/weak-password':
        return 'La contraseña es muy debil'; 
      case 'auth/invalid-email':
        return 'Correo invalido';   
      default:
        return 'Error desconocido'
    }
  }

}
