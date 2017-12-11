import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Pokemon } from '../model/pokemon'

@Injectable()
export class PokemonService {

    constructor(private http: Http) {
    }

    public getAll(): any {
        const url = 'http://pokeapi.co/api/v2/pokemon?limit=151';
        return this.http.get(url).map(response => { return response.json()}).catch(this.handleError);
    }

    private handleError(error: any) {
      let errMsg = (error.message) ? error.message : error.status ? `$(error.status) - ${error.statusText }` : 'Server error';
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}
