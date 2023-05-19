import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { SuperheroService } from 'src/app/services/heroService/superhero.service';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponentComponent implements OnInit{
  protected heroes: Hero[];
  protected heroes1: Hero[];

  protected searchTerm: string = '';

  protected currentPage: number = 0;
  protected totalPages: number = 0;
  protected endPage: boolean = false;
  protected currentHero: Hero | any;

  protected confirmDeletes: boolean = false;


  constructor(private superheroService: SuperheroService, private router: Router) { 
    this.heroes = [];
    this.heroes1 = [];

  }

  ngOnInit(): void {
    this.heroes = this.superheroService.getAllData(); 
    this.totalPages = this.heroes.length;
    this.currentHero = this.heroes[this.currentPage];
  }

  get paginatedData(): Hero {
    return this.heroes[this.currentPage];
  }

  prevPage() {
    this.endPage = false;
    if (this.currentPage >= 1) {
      this.currentPage--;
      this.upadateCurrentHero();
    }
  }

  nextPage() {
    if (this.currentPage == this.heroes.length - 1) {
      this.endPage = true;
    }
    else{
      this.currentPage++;
      this.endPage = false;
      this.upadateCurrentHero();
    }
  }

  onSearch(): void {
    this.heroes1 = this.superheroService.getListByName(this.searchTerm);
  }

  upadateCurrentHero(){
    this.currentHero = this.heroes[this.currentPage];
  }

  showPopUp(){
    this.confirmDeletes = true;
  }

  confirmDeleteFunc(event: Event){
    event.stopPropagation();
    this.superheroService.deleteData(this.currentHero.id);

    this.confirmDeletes = false;
  }

  cancelDelete(event: Event){
    event.stopPropagation();
    this.confirmDeletes = false;
  }
}
