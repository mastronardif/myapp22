
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl: string = "https://random-data-api.com/api/invoice/random_invoice";

  constructor(private http: HttpClient) { }

  getInvoice(id: string): Observable <any[]> {
    id = id ? id : '';
    return this.http.get<any[]>(this.heroesUrl);
  }

  getXYZ(url: string): Observable <any[]> {
    return this.http.get<any[]>(url);
  }

  getFrom(): Observable<any> {
    const objects = [
      { id: 1, name: 'Fabian' },
      { id: 2, name: 'Jan-Niklas' },
    ];
    const observable$ = from(objects);
    return observable$;
  }
}
