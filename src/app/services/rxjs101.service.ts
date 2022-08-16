import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, Observable, of } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root',
})
export class Rxjs101Service {
  constructor(private http: HttpClient, private service: HeroService) {}

  testSwitched(id: string): void {
    this.service.getInvoice
  }

  testSwitched22(id: string) {
    return this.service.getInvoice(id);
  }

  testService(name: string): void {
    console.log(`testService ${name}`);

    switch (name) {
      case 'rxjs_testSwitched':
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
        this.testSwitched(name);
        break;

      case 'rxjs_testSwitched22':
        console.log('testSwitched22');
        // this.service.getHeroes('sss').subscribe(
        //   (val) => console.log(val),
        //   (err) => console.error(err),
        //   () => console.log('http1$ completed')
        // );
        this.service.getInvoice('sss').subscribe({
          next: (v) => console.log(v),
          error: (e) => console.error(`\tERROR occured: ${JSON.stringify(e)}`),
          complete: () => console.info('complete'),
        });

        break;

      case 'rxjs_forkJoin':
        const obs = [
          this.service.getInvoice('111'),
          this.service.getXYZ(
            'https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500'
          ),
          this.service.getInvoice('222'),
        ];

        forkJoin(obs)
          .pipe(
            tap((aaa) => {
              console.log(`aaa ${JSON.stringify(aaa)}`);
            })
          )
          .subscribe((data) => {
            console.log(data);
          });

        break;

      case 'rxjs_from':
        this.service
          .getFrom()
          .pipe(
            tap((item) => {
              item.name = item.name + '_2';
              console.log(item.name);
            })
          )
          .subscribe((data) => {
            console.log(`aaaa 1: ${JSON.stringify(data)}`);
          });
        break;

      default:
        console.log('defalut default');
        break;
    }
  }
}
function wtf(wtf: any): undefined {
  throw new Error('Function not implemented.');
}
