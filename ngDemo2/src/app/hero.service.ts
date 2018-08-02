import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroses';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { Http } from '@angular/http';
@Injectable()
export class HeroService {

  getHeroe(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero_id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(private messageService: MessageService, private http: Http) { }

  getHeroes(): Observable<Hero[]> {
    // 返回Observable<Hero[]>
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHttpReq(): Observable<Object> {
    console.log('http go');
    return this.http.get('http://localhost:8000/');
  }
}
