import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SignUpLoginComponent } from "./sign-up-login/sign-up-login.component";
import { MovieService } from "./movie.service";

// const routes: Routes = [{ path: "**", component: SignUpLoginComponent }];

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: " ", component: SignUpLoginComponent },

  { path: "**", component: SignUpLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
