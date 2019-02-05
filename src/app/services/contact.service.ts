import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../models/ServiceResponse';
import config from '../config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(config.services.contacts);
  }

  getById(id: string): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(config.services.contacts + id);
  }

  addContactInfo(contactInfo: any): Observable<ServiceResponse> {
    return this.http.post<ServiceResponse>(config.services.contacts, contactInfo).pipe();
  }
}
