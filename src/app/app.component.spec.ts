import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchFilter } from './pipes/searchFilter.pipe';
import { PokemonService} from './services/pokemon.service';
import { PagerService} from './services/pager.service';
import { HttpModule, Http } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchFilter,
        AppComponent
      ],
      providers: [ PokemonService, PagerService ],
      imports: [
        HttpModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
