import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';
import { AddHeroComponent } from './components/hero-component/add-hero/add-hero.component';
import { EditHeroComponent } from './components/hero-component/edit-hero/edit-hero.component';
import { FormsModule } from '@angular/forms';
import { DeleteHeroComponent } from './components/hero-component/delete-hero/delete-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    AddHeroComponent,
    EditHeroComponent,
    DeleteHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
