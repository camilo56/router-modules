import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CamiloResolveService implements Resolve<any> {

  constructor(private httpClient: HttpClient) { }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts?userId=${next.params.id}`)
                  .pipe(
                    tap(info => console.log(info))
                  )
  }
}
