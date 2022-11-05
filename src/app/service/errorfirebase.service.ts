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
        
        //Contraseña incorrecta
        case 'auth/wrong-password':
        return 'Contraseña incorrecta';

        //El usuario no existe
        case 'auth/user-not-found':
          return 'El usuario no existe';
      default:
        return 'Error desconocido'  
    }
  }
    }

