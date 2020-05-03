import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token: string;
  loggedIn: boolean = false;

  constructor(private apiService: ApiService) {}

  async signup(username: string, password: string) {
    let response = this.apiService.post("auth/signup", { username, password });
    return await response;
  }

  async login(username: string, password: string) {
    this.apiService.post("auth/signup", { username, password });

    const response = await this.apiService.post("auth/login", {
      username,
      password,
    });

    this.token = response.token;
    alert(response.message);

    if (response.message !== "Username or password invalid") {
      this.loggedIn = true;
    }
  }
  getToken() {
    return this.token;
  }
}
