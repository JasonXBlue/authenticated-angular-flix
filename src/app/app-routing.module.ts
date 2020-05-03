import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SignUpLoginComponent } from "./sign-up-login/sign-up-login.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: " ", component: SignUpLoginComponent },
  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: " ", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
