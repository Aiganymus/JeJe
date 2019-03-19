import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { SearchPageComponent } from "./search-page/search-page.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { RestaurantPageComponent } from "./restaurant-page/restaurant-page.component";

const routes: Routes = [
  { path: "main", component: MainPageComponent },
  { path: "", pathMatch: "full", redirectTo: "main" },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "search", component: SearchPageComponent },
  { path: "carousel", component: RestaurantPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
