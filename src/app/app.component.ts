import { Component, OnInit } from '@angular/core';
import { PokemonService} from './services/pokemon.service';
import { Pokemon } from './model/pokemon';
import {NG2DataTableModule} from "angular2-datatable-pagination";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemons : Array<Pokemon>;

  constructor(private pokemonService: PokemonService) {
    this.pokemons = []
  }

  public ngOnInit() : void {
    this.pokemonService.getAll().subscribe(response => {
      for (var i =0; i < response.results.length; i++) {
        var res = response.results[i];
        var index = this.pokemons.length + 1;
        let pokemon = new Pokemon(index, res.name, "../../assets/images/"+index+".png");
        console.log(pokemon.index + " " + pokemon.name + pokemon.imageUrl);
        this.pokemons.push(pokemon);
      }
      console.log(this.pokemons.length);
    })
  }
}
