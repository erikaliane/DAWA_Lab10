import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conductor } from '../models/conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  url = 'http://localhost:4000/api/conductores/';

  constructor(private http: HttpClient) { }

  getConductores(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteConductor(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarConductor(conductor: Conductor): Observable<any> {
    return this.http.post(this.url, conductor);
  }

  verConductor(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarConductor(id: string, conductor: Conductor): Observable<any> {
    return this.http.put(this.url + id, conductor);
  }
}
