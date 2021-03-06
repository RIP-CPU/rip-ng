import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpBaseModel } from '../models/http-base.model';

export interface HttpFactoryService {

    HTTP_REQUEST(
        api: HttpBaseModel,
        body?: any,
        headers?: HttpHeaders,
        params?: HttpParams,
        pathVariable?: string[],
        responseType?: any): Observable<any>;

    DOWNLOAD(
        api: HttpBaseModel,
        body?: any,
        headers?: HttpHeaders,
        params?: HttpParams,
        pathVariable?: string[]): Observable<any>;

}
