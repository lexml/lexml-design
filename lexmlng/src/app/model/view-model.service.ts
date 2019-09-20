import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewModelService {

  private _boundariesRects = {};

  constructor() { 
  }

  setBoundaryRect(key: string, boundariesRect: BoundariesRect) {
    this._boundariesRects[key] = boundariesRect;
  }

  getBoundaryRect(key: string) {
    return this._boundariesRects[key];
  }
  
}

export class BoundariesRect {

  constructor(public x: number,
              public y: number,
              public width: number,
              public height: number){
  }
}
