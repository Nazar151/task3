import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DeactivatedService implements CanDeactivate<boolean>{

  constructor() { }
  canDeactivate(): boolean{
    return confirm('Are u sure?')
  }


}
