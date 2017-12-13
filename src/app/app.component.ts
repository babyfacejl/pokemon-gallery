import { Component, OnInit } from '@angular/core';
import { PokemonService} from './services/pokemon.service';
import { PagerService} from './services/pager.service';
import { Pokemon } from './model/pokemon';
import { SearchFilter } from './pipes/searchFilter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allPokemons : Array<Pokemon>;
  pokemonsInAction : Pokemon[];
  private searchText: string;
  pager: any = {};
  pagedItems: any[];

  constructor(private pokemonService: PokemonService, private pagerService: PagerService) {
    this.allPokemons = []
  }

  public ngOnInit() : void {
    this.pokemonService.getAll().subscribe(response => {
      for (var i =0; i < response.results.length; i++) {
        var res = response.results[i];
        var index = this.allPokemons.length + 1;
        let pokemon = new Pokemon(index, res.name, "../../assets/images/"+index+".png");
        this.allPokemons.push(pokemon);
      }
      this.pokemonsInAction = this.allPokemons;
      this.setPage(this.allPokemons, 1);
    })
  }
  searchPokemon(search : string): void {
    this.searchText = search;
    let searchFilter = new SearchFilter();
    let results = searchFilter.transform(this.allPokemons, search);
    this.pokemonsInAction = results;
    this.pager.totalPages = undefined;
    this.setPage(this.pokemonsInAction, 1);
  }

  setPage(results: Pokemon[], page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(results.length, page);

    // get current page of items
    this.pagedItems = results.slice(this.pager.startIndex, this.pager.endIndex + 1);
   }
}
