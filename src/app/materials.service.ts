import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMaterials } from './materials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getMaterials(): Observable<IMaterials[]> {
    return this.http.get<IMaterials[]>("http://localhost:8081/sih/api/post/read_material.php");
  }

  addMaterials(material: IMaterials) {
    return this.http.post<any>("http://localhost:8081/sih/api/post/add_material.php", material, this.httpOptions);
  }

  deleteMaterials(id: number) {
    return this.http.post<any>("http://localhost:8081/sih/api/post/delete_material.php", id, this.httpOptions);
  }
}
