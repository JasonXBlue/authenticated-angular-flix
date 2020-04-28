import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token: string;

  constructor(private apiService: ApiService) {}

  // async signup(username: string, password: string) {
  //   let response = await this.apiService.post("auth/signup", {
  //     username,
  //     password,
  //   });
  //   return await response;
  // }

  async signup(user) {
    let response = await this.apiService.post("auth/signup", user);
    return await response;
  }

  // async login(username: string, password: string) {
  //   let loginData = { username, password };

  //   this.apiService.post("auth/signup", loginData);

  //   const response = await this.apiService.post("auth/login", loginData);
  //   this.token = response.token;
  // }

  async login(user) {
    this.apiService.post("auth/signup", user);

    const response = await this.apiService.post("auth/login", user);
    this.token = response.token;
  }
  get getToken() {
    return this.token;
  }
}
