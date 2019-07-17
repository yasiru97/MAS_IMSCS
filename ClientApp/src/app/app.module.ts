import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import * as WebFont from 'webfontloader';

import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule,ToastContainerModule} from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UserService } from './shared/services/user.service';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LayoutComponent } from './components/layout/layout.component';
import { TokenListComponent } from './components/token/token-list/token-list.component';
import { TokenAddComponent } from './components/token/token-add/token-add.component';
import { TokenEditComponent } from './components/token/token-edit/token-edit.component';
import { TokenService } from './shared/services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    TokenListComponent,
    TokenAddComponent,
    TokenEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastContainerModule,
    ToastrModule.forRoot({
      progressBar:true,  
    }),
  ],
  providers: [TokenService,UserService,AuthGuard,{
  provide: HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

    WebFont.load({
      google: {'families':['Lato:300,400,700,900']},
			custom: {"families":["Flaticon", "Font Awesome 5 Solid", "Font Awesome 5 Regular", "Font Awesome 5 Brands", "simple-line-icons"], urls: ['../assets/css/fonts.min.css']},
      active: function() {
        sessionStorage.fonts = true;
      }
    });
  }

 }
