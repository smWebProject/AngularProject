import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Donator } from '../models/Donator.model';

@Injectable({
  providedIn: 'root'
})
export class DonatorService {
  donatorsArray: BehaviorSubject<Donator[]> = new BehaviorSubject([new Donator]);

  constructor(private http: HttpClient) { }
  saveList(list: Donator[]){
    this.donatorsArray.next(list);
}

  public getDonators(): Observable<Donator[]> {
    let url = "/api/Donator/GetDonators";
    return this.http.get<Donator[]>(url);
}
public addDonator(donator: Donator): Observable<boolean>{
  let url="/api/Donator/AddDonator";
  return this.http.post<boolean>(url,donator);
}
public updateDonator(donator: Donator): Observable<boolean>{
  let url="/api/Donator/UpdateDonator";
  return this.http.put<boolean>(url,donator);
}
public deleteDonator(code: string): Observable<string> {
  let url = "/api/Donator/DeleteDonator/"+code;
  return this.http.delete<string>(url);
}

}



