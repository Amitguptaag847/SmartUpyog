import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WastageService {

  constructor(private http: HttpClient) { }

  extractDxf(fd: any) {
    return this.http.post<any>("http://localhost:8081/sih/api/post/extract_dxf.php", fd);
  }
}
