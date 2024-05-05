//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Observable } from 'rxjs/internal/Observable';
//import { LoadingService } from './loading.service';
//import { LoadingIndicatorService } from './services/LoadingIndicatorService';
//import {environment} from '../environments/environment';
//import {environment22} from '../environments/environment';
//appVersion: require('../app/services/buildversion.json').version
export const environment33 = {
  appVersion: require('../app/services/buildversion.json').version,
  production: false
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //currentApplicationVersion00 = environment.appVersion;
  currentApplicationVersion = environment33.appVersion;
  title = 'my-app';
  //loading: boolean = false;
  //loading$ = this.loader.loading$;
  //links = ['First', 'Second', 'Third'];
  constructor(private http: HttpClient) {}

  // launchRequests() {
  //   // posts/0 will fail
  //   for (let i = 0; i < 100; i++) {
  //     this.http
  //       .get(`https://jsonplaceholder.typicode.com/posts/${i}`)
  //       .subscribe(
  //         (post) => {console.log(post)}),
  //         (error: any) => console.log(error
  //         //(error) => this.entries.push('Post request failed')
  //       );
  //   }
  // }

  triggerApiCall = () => {
    for (let j = 0, j_len = 10; j < j_len; j++) {
      for (let i = 1, i_len = 100; i < i_len; i++) {
        this.http
          .get(`https://jsonplaceholder.typicode.com/posts/${i}`)
          .subscribe((post) => console.log(post));
      }
    }
  };
}
