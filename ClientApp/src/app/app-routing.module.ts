import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { TokenListComponent } from './components/token/token-list/token-list.component';
import { TokenAddComponent } from './components/token/token-add/token-add.component';


const routes: Routes = [
 {path: '',component: LayoutComponent,
    children: [
                {path:'',redirectTo:'/home',pathMatch:'full',canActivate: [AuthGuard]},
                {path:'home',component: HomeComponent, canActivate: [AuthGuard]},
                {path:'token-list',component:TokenListComponent, canActivate: [AuthGuard]},
                {path:'token-add',component:TokenAddComponent, canActivate: [AuthGuard]},

              ]},
              
  {path:'user',component: UserComponent,
    children:[
                {path:'register',component: RegisterComponent},
                {path:'login',component: LoginComponent},  
              ]},
              
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
