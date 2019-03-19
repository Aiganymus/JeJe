import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'result', component: SearchPageComponent },
  { path: 'food-place', component: RestaurantPageComponent },
  { path: 'add-review', component: AddReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
