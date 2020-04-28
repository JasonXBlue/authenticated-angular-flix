import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-sign-up-login",
  templateUrl: "./sign-up-login.component.html",
  styleUrls: ["./sign-up-login.component.css"],
})
export class SignUpLoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
