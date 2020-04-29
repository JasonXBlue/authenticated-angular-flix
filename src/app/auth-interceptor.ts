import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    let authToken = this.authService.getToken;
    if (!authToken) {
      authToken = " ";
    }

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.

    // const authReq = request.clone({
    //   headers: request.headers.set("Authorization", "bearer " + authToken),
    // });
    const clone = request.clone({
      setHeaders: {
        Authorization: "Bearer ${this.authService.getToken}",
      },
    });

    // send cloned request with header to the next handler.
    return next.handle(clone);
  }
}