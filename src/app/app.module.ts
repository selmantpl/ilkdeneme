import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routeConfig: Route[] = [
  {
      path: 'home',
      component:HomeComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'iletisim',
    component:IletisimComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    IletisimComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
