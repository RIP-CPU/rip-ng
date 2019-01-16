import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* req = req.clone({
            setHeaders:{
                "X-Authorization": "Bearer xkjEJ23kjbhdklaetb"
            }
        }); */
        return next.handle(req)
                    .catch(this.errorHandler);
    }

    protected errorHandler = (error: HttpErrorResponse) => {
        let errorMsg: string = 'Internal Server Error';
        if (error.status === 200 || error.status === 304)
            return Observable.empty();
        switch (error.status) {
            case 404:
                errorMsg = 'Page Not Found';
                break;
            case 400:
                errorMsg = 'Bad Credentials';
                break;
            case 401:
                errorMsg = 'Unauthorized';
                break;
            default:
                break;
        }
        return Observable.throw(errorMsg);
    }

}
