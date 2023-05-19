import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperheroService } from 'src/app/services/heroService/superhero.service';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent{
  chosenHeroName: any;
  private chosenHeroId: any;
  currentHeroName: any;

  constructor(private heroService: SuperheroService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.chosenHeroId = params.get('id');
    });
    this.currentHeroName = this.heroService.getDataById(this.chosenHeroId).name;
  } 

  editHero() {
    this.heroService.updateData(this.chosenHeroId, this.chosenHeroName);
     this.router.navigate(['']);
  }
}
