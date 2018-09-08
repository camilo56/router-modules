import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CamiloResolveService implements Resolve<any> {

  constructor() { }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      console.log()
      return of([
                    {name: "camilo", apellido: "colmenares"},
                    {name: "camilo1", apellido: "colmenares1"},
                    {name: "camilo2", apellido: "colmenares2"},
                    {name: "camilo3", apellido: "colmenares3"},
                  ]).pipe(
                    delay(2000),
                    tap(info => console.log(info))
                  )
  }
}
