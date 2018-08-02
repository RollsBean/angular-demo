import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 从父组件中传入的参数 用@Input() 装饰器
  @Input() hero: Hero;
  constructor(private route: ActivatedRoute,
              private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
    console.log('hero detail component init', this.getHero);
  }

  getHero(): void{
    // JavaScript 的 (+) 操作符会把字符串转换成数字
    // const id = +this.route.snapshot.queryParams['id'];
    this.heroService.getHttpReq().subscribe();
    let id = undefined;
    this.route.params.subscribe((params: Params) => {
      id = params['id'];
      console.log(id);
    });
    this.heroService.getHeroe(id).subscribe(hero => this.hero = hero);
  }

}
