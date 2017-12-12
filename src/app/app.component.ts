import { Component, OnInit } from '@angular/core';
import { PokemonService} from './services/pokemon.service';
import { Pokemon } from './model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemons : Array<Pokemon>;
  private searchText: string;

  constructor(private pokemonService: PokemonService) {
    this.pokemons = []
  }

  public ngOnInit() : void {
    this.pokemonService.getAll().subscribe(response => {
      for (var i =0; i < response.results.length; i++) {
        var res = response.results[i];
        var index = this.pokemons.length + 1;
        let pokemon = new Pokemon(index, res.name, "../../assets/images/"+index+".png");
        this.pokemons.push(pokemon);
      }
    })
  }
  searchPokemon(search : string): void {
    this.searchText = search;
  }
}
