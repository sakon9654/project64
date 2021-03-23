import { Injectable} from '@angular/core';
import { BehaviorSubject, Subject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})
  
export class RevealService {

    constructor(private http: HttpClient){}
    

    private item: Array<Item> = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    ]

    menu$: Subject<Object> = new Subject<Object>();
    user$: Subject<String> = new Subject<String>();
    source$: BehaviorSubject<Array<Item>> = new BehaviorSubject<Array<Item>>(this.item)


    pushService(item: Item) {
        this.item = [...this.item, item]
        this.source$.next(this.item)
    }

    filter(filter: string): Observable<any>{
        return this.http.post('http://localhost:8080/api/supplie/filter', {
            filter
        },httpOptions);
    }
}

export interface Item {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}