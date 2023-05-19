import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperheroService } from 'src/app/services/heroService/superhero.service';

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.css']
})
export class DeleteHeroComponent {
  private chosenHeroId: any;
  currentHeroName: any;


  constructor(private superheroService: SuperheroService, private router: Router, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.chosenHeroId = params.get('id');
    });
    this.currentHeroName = this.superheroService.getDataById(this.chosenHeroId).name;
  } 

  confirmDeleteFunc(){
    this.superheroService.deleteData(this.chosenHeroId);
    this.router.navigate(['']);
  }

  cancelDelete(){
    this.router.navigate(['']);
  }
}
