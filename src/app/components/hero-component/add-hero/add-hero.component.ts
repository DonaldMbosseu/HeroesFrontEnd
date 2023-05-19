import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperheroService } from 'src/app/services/heroService/superhero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {
  heroName: string = '';

  constructor(private heroService: SuperheroService, private router: Router) {}

  addHero() {
    this.heroService.createData(this.heroName);
     this.router.navigate(['']);
  }
}
