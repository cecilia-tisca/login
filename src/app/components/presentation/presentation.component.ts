import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, 
    private router: Router) { }

  ngOnInit(): void {
  }

  logOut () {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']))
  }

}


