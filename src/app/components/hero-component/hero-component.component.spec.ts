import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponentComponent } from './hero-component.component';
import { SuperheroService } from 'src/app/services/heroService/superhero.service';
import { Observable, of } from 'rxjs';

describe('HeroComponentComponent', () => {
  let component: HeroComponentComponent;
  let fixture: ComponentFixture<HeroComponentComponent>;
  let service: SuperheroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComponentComponent ]
    })
    .compileComponents();

      beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponentComponent],
      providers: [SuperheroService],
    }).compileComponents();
    });


    beforeEach(() => {
      fixture = TestBed.createComponent(HeroComponentComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(SuperheroService);
    });
  
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should display the list of heroes', () => {
      const heroes = [{ id: 1, name: 'Hero 11' }, { id: 2, name: 'Hero 22' }, { id: 3 , name: 'Hero 33' }];
      //spyOn(service, 'getAllData').and.returnValue(of(heroes));
  
      fixture.detectChanges();
  
      const heroElements = fixture.nativeElement.querySelectorAll('.hero-item');
      expect(heroElements.length).toBe(heroes.length);
    });
  

    fixture = TestBed.createComponent(HeroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
