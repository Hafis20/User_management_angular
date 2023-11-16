import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './Service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token:string = this.service.getUserTokenFromStorage() as string;

    const authReq = request.clone({
      headers:request.headers.set('Authorization',`Bearer ${token}`)
    })
    return next.handle(authReq);
  }
}
