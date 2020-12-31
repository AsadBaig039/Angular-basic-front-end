import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ApiService {
  baseURL: string = "http://localhost:3001";

  constructor(private http: HttpClient) {}

  updateDoctorTiming(name, updatedTime): Observable<any> {
    const headers = { "content-type": "application/json" };
    console.log(name, updatedTime);
    return this.http.put(
      this.baseURL +
        "/app/updateDoctorTiming/" +
        name +
        "/newTiming/" +
        updatedTime,
      {
        headers: headers
      }
    );
  }
}
