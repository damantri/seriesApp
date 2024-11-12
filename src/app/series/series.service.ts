// archivo: series.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json';

  constructor(private httpClient: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(this.apiUrl).pipe(
      map(data => data.map(serie => new Serie(serie)))
    );
  }
}
