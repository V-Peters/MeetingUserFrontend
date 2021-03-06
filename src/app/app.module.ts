import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDe);

import { AppRoutingModule } from './app-routing.module';

import { authInterceptorProviders } from './authentification/auth.interceptor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MeetingListComponent } from './meeting/meeting-list/meeting-list.component';
import { MeetingEditComponent } from './meeting/meeting-edit/meeting-edit.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ParticipantsListComponent } from './user/participants-list/participants-list.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './error/access-denied/access-denied.component';
import { LoaderComponent } from './loader/loader.component';
import { ProfileEditUserComponent } from './user/profile/profile-edit/profile-edit-user.component';
import { ProfileEditPasswordComponent } from './user/profile/profile-edit-password/profile-edit-password.component';
import { ForgotPasswordComponent } from './authentification/forgot-password/forgot-password.component';
import { EmailSentComponent } from './authentification/forgot-password/email-sent/email-sent.component';
import { SetNewPasswordComponent } from './authentification/forgot-password/set-new-password/set-new-password.component';
import { MeetingDetailsComponent } from './meeting/meeting-details/meeting-details.component';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MeetingListComponent,
    MeetingEditComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ParticipantsListComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    LoaderComponent,
    ProfileEditUserComponent,
    ProfileEditPasswordComponent,
    ForgotPasswordComponent,
    EmailSentComponent,
    SetNewPasswordComponent,
    MeetingDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    TextFieldModule
  ],
  providers: [
    authInterceptorProviders,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
