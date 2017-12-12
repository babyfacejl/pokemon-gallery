import { SearchFilter } from './searchFilter.pipe';
import { Pokemon } from '../model/pokemon';

describe('Search filter test', () => {
  let searchFilter : SearchFilter;
  let pokemons: Array<Pokemon>;

  beforeEach(() => {
    searchFilter = new SearchFilter();
    pokemons = [];
    let pokemon1 = new Pokemon(1, "pikachu", "url1");
    let pokemon2 = new Pokemon(2, "charizard", "url2");
    let pokemon3 = new Pokemon(3, "metapod", "url3");
    let pokemon4 = new Pokemon(4, "butterfree", "url4");
    pokemons.push(pokemon1);
    pokemons.push(pokemon2);
    pokemons.push(pokemon3);
    pokemons.push(pokemon4);
  });

  it ('should find pokmens if search text matches', () => {
    let results = searchFilter.transform(pokemons, 'pika');
    expect(results.length).toBe(1);
    expect(results[0].name).toBe("pikachu");
  });

  it ('should find all pokmens if search text not specified', () => {
    let results = searchFilter.transform(pokemons, '');
    expect(results.length).toBe(4);
  });

  it ('should find all pokmens if search text no match', () => {
    let results = searchFilter.transform(pokemons, '');
    expect(results.length).toBe(4);
  });
});
