import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-login",
  templateUrl: "./sign-up-login.component.html",
  styleUrls: ["./sign-up-login.component.css"],
})
export class SignUpLoginComponent implements OnInit {
  username: string;
  password: string;
  user: any;
  token;

  ngOnInit() {}

  constructor(private authService: AuthService, private router: Router) {
    this.user = {
      username: this.username,
      password: this.password,
    };
  }
  async signUp() {
    await this.authService.signup(this.username, this.password);

    this.logIn();
  }

  async logIn() {
    await this.authService.login(this.username, this.password);
    if (this.authService.loggedIn) {
      this.router.navigate(["/main"]);
    }
  }
}
