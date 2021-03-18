import { Injectable} from '@angular/core';
import { BehaviorSubject, Subject, from} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class RevealService {

    

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
}

export interface Item {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}