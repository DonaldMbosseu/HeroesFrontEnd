import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero';

@Injectable({
  providedIn: 'root'
})export class SuperheroService {
  private heroes: Hero[] = [];
  private hero: Hero;

  constructor() { 
    this.heroes = [
      { id: 1, name: 'Hero 1' },
      { id: 2, name: 'Hero 2' },
      { id: 3, name: 'Hero 3' }
    ];
    this.hero = { id: 1, name: 'Hero 1' };
  }

  getAllData(): any[] {
    return this.heroes;
  }

  getDataById(id: number): any {
    return this.heroes[id-1];
  }

  createData(name: any): void {
    this.hero.id = this.heroes.length + 1;
    this.hero.name = name;
    this.heroes.push(this.hero);
  }

  updateData(id: any, name: any): void {
    this.heroes[id-1] = {id, name};
  }

  deleteData(id: number): void {
    this.heroes.splice(id-1, 1);
  }

  getListByName(nameToSearch: any): Hero[]{
    const filteredArray = this.heroes.filter((item) =>
   item.name.toLowerCase().includes(nameToSearch.toLowerCase())
   );
   return filteredArray;
  }
}
