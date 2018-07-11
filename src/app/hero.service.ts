import { Injectable } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

   getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
  	this.messageService.add(`HeroService: fetched hero id=${id}`);
  	return of(HEROES.find(heroItem => heroItem.id === id));
  }

}
