import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MainService } from './main.service';
import { PatternComponent } from './pattern/pattern.component';
import { CreateAccountDialogComponent } from './create-account-dialog/create-account-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    ErrorDialogComponent,
    PatternComponent,
    CreateAccountDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'pattern', component: PatternComponent },
    ])
  ],
  providers: [MainService],
  entryComponents: [ErrorDialogComponent, CreateAccountDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
