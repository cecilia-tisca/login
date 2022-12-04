import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { BebidasService } from './service/bebidas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login';
    bebidaList: any = [];
  
  // nombre: string | undefined;

  
  constructor(private bebidaService: BebidasService){
    console.log('El componente se a creado');
    
  }

  ngOnInit(): void {
    console.log('Componente inisializado');
    this.bebidaService.getBebidas()
    .subscribe((response: any) => this.bebidaList = response)
  }

  // search(){
  //   this.bebidaService.getBebidas(this.name)
  // }
  // name(name: any) {
  //   throw new Error('Method not implemented.');
  // }
  
}


