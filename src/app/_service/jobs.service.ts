import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IJobs } from '../_interface/jobs'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private _url: string = "/assets/data/jobs.json";

  constructor(private http: HttpClient) { }

  getJobs(): Observable<IJobs[]> {
    return this.http.get<IJobs[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Verbindungsfehler");
  }
}
