import { OnInit, Component } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heroses';
import { HeroService } from '../hero.service';
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  implements OnInit {
    heroes: Hero[];
    nameStyle(): string {
      return '#4183c4';
    }

    constructor(private heroService: HeroService) {
    }
    ngOnInit() {
        console.log('Hero init');
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

// tslint:disable-next-line:eofline
}