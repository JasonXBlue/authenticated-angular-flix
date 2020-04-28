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

  ngOnInit() {}

  constructor(private authService: AuthService, private router: Router) {
    this.user = {
      username: this.username,
      password: this.password,
    };
  }
  async signUp(user) {
    await this.authService.signup(user);
    await this.authService.login(user);
  }

  async logIn(user) {
    await this.authService.login(user);
  }
}
