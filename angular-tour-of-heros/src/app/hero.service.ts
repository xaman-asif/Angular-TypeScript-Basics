import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { MessageService } from './message.service';
import { HEROS } from './mock-heros';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeros(): Observable<Hero[]> {
    const heros = of(HEROS);
    this.messageService.add('HeroService: fetched heros');
    return heros;
  }
}
