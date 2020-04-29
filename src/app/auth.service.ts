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

  async signup(username: string, password: string) {
    let response = this.apiService.post("auth/signup", { username, password });
    return await response;
  }

  // async login(username: string, password: string) {
  //   let loginData = { username, password };

  //   this.apiService.post("auth/signup", loginData);

  //   const response = await this.apiService.post("auth/login", loginData);
  //   this.token = response.token;
  // }

  async login(username: string, password: string) {
    this.apiService.post("auth/signup", { username, password });

    const response = await this.apiService.post("auth/login", {
      username,
      password,
    });

    this.token = response.token;
    console.log(response);
  }
  get getToken() {
    return this.token;
  }
}
