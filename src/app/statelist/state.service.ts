import { Injectable } from '@angular/core';
import { IState } from '../models/state';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private _http: Http) { }
  getStates(): Observable<IState[]> {
    return this._http.get('http://localhost:3000/states', {})
      .pipe(map((response: Response) => response.json()));

  }
  getStateDetails(city: string): Observable<IState[]> {
    return this._http.get('http://localhost:3000/states?city=' + city, {})
      .pipe(map((response: Response) => response.json()));
  }
}

