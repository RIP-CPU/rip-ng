import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { HttpAbstractService } from "./http-abstract.service";
import { HttpBaseModel } from "../models/http-base.model";

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService extends HttpAbstractService {

  constructor(protected http: HttpClient){
    super();
  }

  public HTTP_REQUEST(api:HttpBaseModel, body?: any, headers?: HttpHeaders, params?: HttpParams):Observable<any>{
    let response:Observable<any> = null;
    switch(api.method){
      case "POST":
        response = this.HTTP_POST(this.getAPI(api), body,headers, params).catch(this.errorHandler);
        break;
      case "PUT":
        response = this.HTTP_PUT(this.getAPI(api), body, headers, params).catch(this.errorHandler);
        break;
      case "DELETE":
        response = this.HTTP_DELETE(this.getAPI(api), headers, params).catch(this.errorHandler);
        break;
      default:
        response = this.HTTP_GET(this.getAPI(api), headers, params).catch(this.errorHandler);
        break;
    }
    return response;
  }
  
  public HTTP_GET(url: string, headers?: HttpHeaders, params?: HttpParams):Observable<any>{
      return this.http.get(url, {headers: headers, params: params}).catch(this.errorHandler);
  }
  
  public HTTP_POST(url: string, body: any, headers?: HttpHeaders, params?: HttpParams):Observable<any>{
      return this.http.post(url, body, {headers: headers, params: params}).catch(this.errorHandler);
  }
  
  public HTTP_PUT(url: string, body: any, headers?: HttpHeaders, params?: HttpParams):Observable<any>{
      return this.http.put(url, body, {headers: headers, params: params}).catch(this.errorHandler);
  }
  
  public HTTP_DELETE(url: string, headers?: HttpHeaders, params?: HttpParams):Observable<any>{
      return this.http.delete(url, {headers: headers, params: params}).catch(this.errorHandler);
  }

}