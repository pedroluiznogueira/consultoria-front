import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './components/layout/home/home.component';
import { FormularioUsuarioLoginComponent } from './components/conta/formulario-usuario-login/formulario-usuario-login.component';
import { FormularioUsuarioComponent } from './components/conta/formulario-usuario/formulario-usuario.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormularioAdminLoginComponent } from './components/conta/formulario-admin-login/formulario-admin-login.component';
import { FormularioAdminComponent } from './components/conta/formulario-admin/formulario-admin.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/entidades/main/main.component';
import { ProfessoresComponent } from './components/entidades/professores/professores.component';
import { ProfessorFormularioComponent } from './components/entidades/professor-formulario/professor-formulario.component';
import { ProfessorUpdateFormularioComponent } from './components/entidades/professor-update-formulario/professor-update-formulario.component';
import { ProfessorDetailsComponent } from './components/entidades/professor-details/professor-details.component';
import { CursosComponent } from './components/entidades/cursos/cursos.component';
import { FormularioCursosComponent } from './components/entidades/formulario-cursos/formulario-cursos.component';
import { FormularioCursosUpdateComponent } from './components/entidades/formulario-cursos-update/formulario-cursos-update.component';
import { CarrinhoComponent } from './components/entidades/carrinho/carrinho.component';
import { CursoDetailsComponent } from './components/entidades/curso-details/curso-details.component';
import { WishlistComponent } from './components/entidades/wishlist/wishlist.component';
import { PagamentoComponent } from './components/entidades/pagamento/pagamento.component';
import { AprendizadoComponent } from './components/entidades/aprendizado/aprendizado.component';
import { CursoAprendizadoComponent } from './components/entidades/curso-aprendizado/curso-aprendizado.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FilesComponent } from './components/entidades/files/files.component';
import { UsuarioDetailsComponent } from './components/entidades/usuario-details/usuario-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioUsuarioLoginComponent,
    FormularioUsuarioComponent,
    FormularioAdminLoginComponent,
    FormularioAdminComponent,
    AuthenticationComponent,
    MainComponent,
    ProfessoresComponent,
    ProfessorFormularioComponent,
    ProfessorUpdateFormularioComponent,
    ProfessorDetailsComponent,
    FormularioCursosComponent,
    FormularioCursosUpdateComponent,
    CursosComponent,
    CarrinhoComponent,
    CursoDetailsComponent,
    WishlistComponent,
    PagamentoComponent,
    AprendizadoComponent,
    CursoAprendizadoComponent,
    FilesComponent,
    UsuarioDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    NgbModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatMenuModule,
    FormsModule,
    YouTubePlayerModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    YouTubePlayerModule
  ],
  exports: [RouterModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
