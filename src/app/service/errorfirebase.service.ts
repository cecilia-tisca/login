import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorfirebaseService {

  constructor() { }
  Errorfirebase(code: string) {
    switch (code) {
      
      //El correo ya existe
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
       
      //Contraseña debil
      case 'auth/weak-password':
        return 'La contraseña es muy debil'; 
      
        //Correo invalido
        case 'auth/invalid-email':
        return 'Correo invalido';   
      default:
        return 'Error desconocido'
    }
  }
    }

