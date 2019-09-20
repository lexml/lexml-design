import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  private _elements: Element[];

  constructor() {
    const elementCount = Math.floor(Math.random() * 25) + 1;
    this._elements = [];
    for (let i = 0; i < elementCount; i++) {
      this._elements.push(new Element(i));
    }
  }

  public get elements() {
    return this._elements;
  }
}

export class Element {

  public id: number;

  constructor(_id: number) {
    this.id = _id;
  }


}
