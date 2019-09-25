import { Injectable } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor() {
  }

  public generateElements(prefix: string) {

    const elementCount = Math.floor(Math.random() * 250) + 1;
    const elements = [];

    for (let i = 0; i < elementCount; i++) {
      elements.push(new Element(i, prefix));
    }
    
    return elements;
  }
}

export class Element {

  public id: string;

  constructor(private count: number,
    public prefix?: string,
    public content?: string) {

      this.id = prefix? prefix + '_' + count: '' + count;

      if (!content) {
        this.content = this.generateRandomContent();
      } 
    }

    private generateRandomContent(): string {
      const lorem = new LoremIpsum({
        sentencesPerParagraph:{
          max:8,
          min:3
        },
        wordsPerSentence:{
          max: 20,
          min: 4
        }
      })
      return lorem.generateParagraphs(1);
    }
}

export class ElementView {
}
