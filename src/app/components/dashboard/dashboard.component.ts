import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BebidasService } from 'src/app/service/bebidas.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bebidaList: any[] = [];
dataUser: any;

  constructor(private afAuth: AngularFireAuth, 
    private router: Router,
    private bebidaService: BebidasService) { }

    ngOnInit(): void {
      console.log('Componente inisializado');
      this.bebidaService.getBebidas()
      .subscribe(( response:any)  => {
        this.bebidaList = response.drinks
        console.log(response.drinks)
      })
    }

    // this.afAuth.currentUser.then(user => {
    //   if(user && user.emailVerified) {
    //     this.dataUser = user;
    //   }else {
    //     this.router.navigate(['/login'])

    //   }
    // })
    
  

  logOut () {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']))
  }

}