import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';


export interface CurrentComponent{
  canDeactive: () => Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveService implements CanDeactivate<CurrentComponent> {

  canDeactivate(currentComponent: CurrentComponent){
    console.log(`canDeactivate is Working`)
    return currentComponent.canDeactive ? currentComponent.canDeactive() : true; 
  }

}
