import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        /* req = req.clone({
            setHeaders:{
                "X-Authorization": "Bearer xkjEJ23kjbhdklaetb"
            }
        }); */
        return next.handle(req);
    }

}