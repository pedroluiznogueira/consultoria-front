import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { FormularioUsuarioLoginComponent } from './components/conta/formulario-usuario-login/formulario-usuario-login.component';
import { FormularioUsuarioComponent } from './components/conta/formulario-usuario/formulario-usuario.component';
import { FormularioAdminLoginComponent } from './components/conta/formulario-admin-login/formulario-admin-login.component';
import { FormularioAdminComponent } from './components/conta/formulario-admin/formulario-admin.component';
import { AuthGuard } from './components/conta/comp/auth.guard';
import { MainComponent } from './components/entidades/main/main.component';
import { ProfessoresComponent } from './components/entidades/professores/professores.component';
import { ProfessorFormularioComponent } from './components/entidades/professor-formulario/professor-formulario.component';
import { ProfessorUpdateFormularioComponent } from './components/entidades/professor-update-formulario/professor-update-formulario.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [       
      { path: '', component: MainComponent},  

      { path: 'professores', component:  ProfessoresComponent },
      { path: 'professor-formulario', component:  ProfessorFormularioComponent },
      { path: 'professor-update-formulario', component:  ProfessorUpdateFormularioComponent }
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '', component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: FormularioUsuarioLoginComponent},
      { path: 'cadastro', component: FormularioUsuarioComponent},

      { path: 'login-admin', component: FormularioAdminLoginComponent },
      { path: 'cadastro-admin', component: FormularioAdminComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
