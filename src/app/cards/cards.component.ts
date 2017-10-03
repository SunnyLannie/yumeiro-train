import { Component, OnInit } from '@angular/core';

import { Card } from './card';

@Component({
  selector: 'ymt-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  cards: Card[];
  selectedCard: Card;

  constructor() { }

  getCards(): void {
    
  }

  ngOnInit() {
  }

  onSelect(card: Card): void{
    this.selectedCard = card;
  }



}
