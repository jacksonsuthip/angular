import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormReactiveService {
  allDevices = [];
  name = 'kkk';

  constructor(private http: HttpClient) {}

  onAddDevice(data: any) {
    return this.http.post<any>('http://localhost:50800/Api/Save', data).pipe(
      catchError((error: any, caught: Observable<any>): Observable<any> => {
        console.log('There was an error!', error);
        return of();
      })
    );
  }

  onGetAllDevices() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5'
    );
  }
}
