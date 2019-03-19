import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContainerComponent } from './container/container.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { SocialMediaComponent } from './social-media/social-media.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
>>>>>>> a8c65d29a1b3a6aaac5c2fbab45e09d86c802bc7

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ContainerComponent,
    RegistrationComponent,
    LoginComponent,
<<<<<<< HEAD
    FooterComponent
=======
    SocialMediaComponent,
    SearchBarComponent
>>>>>>> a8c65d29a1b3a6aaac5c2fbab45e09d86c802bc7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
