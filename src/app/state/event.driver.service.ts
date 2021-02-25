import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ActionEvent} from './product.state';

@Injectable({providedIn:"root"})
export class EventDriverService {
  sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>();
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  sourceEventSubject2:Subject<ActionEvent>=new Subject<ActionEvent>();
  sourceEventSubjectObservable2=this.sourceEventSubject.asObservable();

  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
