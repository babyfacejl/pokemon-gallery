import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemonService } from './services/pokemon.service'
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import {NG2DataTableModule} from "angular2-datatable-pagination";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ PokemonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
