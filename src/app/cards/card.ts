import { ActiveSkill, CenterSkill} from './skill';



enum Rarity {
  SSR,
  SR,
  R,
  N
}

enum Attribute{
  FAIRY,
  ANGEL,
  PRINCESS
}

enum ObtainableFrom {
  LIMITED_GACHA,
  PERMANENT_GACHA,
  EVENT
}

export class Card {
  id: number;
  name: string;
  idolName: string;
  rarity: Rarity;
  attribute: Attribute;
  releaseDates: Date;
  rerunDates: Date;
  availability: ObtainableFrom[];
  vocal: number;
  visual: number;
  dance: number;
  image: ImageData;
  centerSkill: CenterSkill;
  activeSkill: ActiveSkill;
  activeDuration: number;
  activeActivationChance: number;
  favorited: number;
  wishlisted: number;
  comments: string[];
}