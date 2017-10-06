import { Card } from '../cards/card';

export class Event {
  start: Date;
  end: Date;
  name: string;
  id: number;
  featuredCard: Card;
  secondaryCard: Card;
  eventSong: string;
}