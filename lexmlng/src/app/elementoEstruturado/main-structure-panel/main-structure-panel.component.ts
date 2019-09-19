import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

@Component({
  selector: 'lexml-main-structure-panel',
  templateUrl: './main-structure-panel.component.html',
  styleUrls: ['./main-structure-panel.component.scss']
})
export class MainStructurePanelComponent implements OnInit {
  
  public content = '';

  constructor() { }

  ngOnInit() {
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

    this.content = lorem.generateParagraphs(1);
  }


}
