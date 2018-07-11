import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  	heroes: Hero[];

  	selectedHero: Hero;

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    getHeroes(): void {
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(heroItem => heroItem !== hero);
      this.heroService.deleteHero(hero);
    }

  	constructor(private heroService: HeroService) {  }

    ngOnInit() {
      this.getHeroes();
    }



}
