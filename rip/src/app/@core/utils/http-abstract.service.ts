import { Observable } from 'rxjs/Rx';
import { HttpBaseModel } from '../models/http-base.model';
import { HttpFactoryService } from './http-factory.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

export abstract class HttpAbstractService implements HttpFactoryService {

  public abstract HTTP_REQUEST(
    api: HttpBaseModel,
    body?: any,
    headers?: HttpHeaders,
    params?: HttpParams,
    pathVariable?: string[],
    responseType?: any): Observable<any>;
  public abstract DOWNLOAD(
    api: HttpBaseModel,
    body?: any,
    headers?: HttpHeaders,
    params?: HttpParams,
    pathVariable?: string[]): Observable<any>;
  public abstract HTTP_GET(url: string, headers?: HttpHeaders): Observable<any>;
  public abstract HTTP_POST(url: string, body: any, headers?: HttpHeaders): Observable<any>;
  public abstract HTTP_PUT(url: string, body: any, headers?: HttpHeaders): Observable<any>;
  public abstract HTTP_DELETE(url: string, headers?: HttpHeaders): Observable<any>;

  protected getAPI(api: HttpBaseModel, pathVariable?: string[]): string {
    let url: string = api.protocol +
                    '://' +
                    api.host +
                    ((api.port) ? ':' + api.port : '') +
                    api.path;
    if (pathVariable)
      pathVariable.forEach(path => {
        url = url + '/' + path;
      });
    return url;
  }

}
