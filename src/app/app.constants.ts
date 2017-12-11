import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://pokeapi.co/';
    public ApiUrl = 'api/v2/pokemon?limit=151';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
