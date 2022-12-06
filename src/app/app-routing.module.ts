import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPassComponent } from './components/recuperar-pass/recuperar-pass.component';
import { RegistrarUserComponent } from './components/registrar-user/registrar-user.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { PresentationComponent } from './components/presentation/presentation.component';

const routes: Routes = [
  {path:'', redirectTo: 'presentacion', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'registrar-user', component: RegistrarUserComponent},
  {path:'verificar-email', component: VerificarEmailComponent},
  {path:'recuperar-pass', component: RecuperarPassComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'presentacion', component: PresentacionComponent},
  {path: 'presentation', component: PresentationComponent},
  {path:'**', redirectTo: 'presentacion', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
