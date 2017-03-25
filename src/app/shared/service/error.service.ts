import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ErrorService {

    private updateSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    update$: Observable<string> = this.updateSubject.asObservable();

    public updateMessage(message: string) {
        this.updateSubject.next(message);
    }
}
