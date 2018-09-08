import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, timer, of } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class CamiloStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        //console.log("route", route)
        const loadRoute = (delay = 0) => timer(delay).pipe(flatMap(_ => load()));

        return route.data && route.data.preload 
            ? loadRoute(route.data.delay)
            : of(null);
      }
}