import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './pages/home/home.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './pages/login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { NovaPastoral } from './pages/pastoral/nova-pastoral/nova-pastoral.component';
import { ListarPastoral } from './pages/pastoral/listar-pastoral/listar-pastoral.component';
import { EditarPastoral } from './pages/pastoral/editar-pastoral/editar-pastoral.component';
import { NovoMembroComponent } from './pages/controle-usuario/novo-membro/novo-membro.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaPastoral,
    HomeComponent,
    EditarPastoral,
    LoginComponent,
    ListarPastoral,
    NovoMembroComponent,
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatChipsModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatStepperModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    AngularEditorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-Br' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
