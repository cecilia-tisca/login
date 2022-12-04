import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
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
    private Errorfirebase: ErrorfirebaseService) {
    this.registrarUser = this.fb.group({
      email: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[\d]'), Validators.pattern('[A-Z]')]],
      // password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('((?=.* \\d)(?=.*[az])(?=.*[AZ]).{8,30})')]],
      repetirpassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    const email = this.registrarUser.value.email
    const password = this.registrarUser.value.password
    const repetirpassword = this.registrarUser.value.repetirpassword;



    if (password !== repetirpassword) {
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error');
      // alert('El usuario fue registrado con Exito');
      // alert('Las contraseñas ingresadas deben ser las mismas')
      return;
    }

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.verificarCorreo();

      }).catch((error) => {
        this.loading = false;
        console.log(error);
        //alert(this.Errorfirebase.Errorfirebase(error.code));
        this.toastr.error(this.Errorfirebase.Errorfirebase(error.code), 'Error');
      })
  }

  verificarCorreo() {
    this.afAuth.currentUser.then(user => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info('Le enviamos un correo electronico para su verificación', 'Verificar Correo')
        this.router.navigate(['/login']);
      })
  }


}
