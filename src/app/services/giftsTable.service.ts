import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { Gift } from '../models/Gift.model';


@Injectable()
export class GiftsTableService {
    giftsArray: BehaviorSubject<Gift[]> = new BehaviorSubject([new Gift]);
    giftsForUser: Gift[] = [];
    numOfSaledGifts: number = 0;
    constructor(private http: HttpClient) { }
    saveList(list: Gift[]) {
        this.giftsArray.next(list);
    }
    public getGifts(): Observable<Gift[]> {
        let url = "/api/Gifts/GetGifts";
        return this.http.get<Gift[]>(url);
    }
    public addGift(gift: Gift): Observable<boolean> {
        let url = "/api/Gifts/AddGift";
        return this.http.post<boolean>(url, gift);
    }
    public updateGift(gift: Gift): Observable<boolean> {
        let url = "/api/Gifts/UpdateGift";
        return this.http.put<boolean>(url, gift);
    }
    public deleteGift(code: string): Observable<string> {
        let url = "/api/Gifts/DeleteGift/" + code;
        return this.http.delete<string>(url);
    }

}
