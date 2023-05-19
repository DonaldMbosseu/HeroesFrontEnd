import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';
import { AddHeroComponent } from './components/hero-component/add-hero/add-hero.component'; 
import { EditHeroComponent } from './components/hero-component/edit-hero/edit-hero.component'; 
import { DeleteHeroComponent } from './components/hero-component/delete-hero/delete-hero.component';



const routes: Routes = [
  { path: '', component: HeroComponentComponent},
  { path: 'components/hero-component/add-hero', component: AddHeroComponent},
  { path: 'components/hero-component/edit-hero/:id', component: EditHeroComponent},
  { path: 'components/hero-component/delete-hero/:id', component: DeleteHeroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
