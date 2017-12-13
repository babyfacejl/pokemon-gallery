import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemonService } from './services/pokemon.service'
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchFilter } from './pipes/searchFilter.pipe';
import { PagerService } from './services/pager.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ PokemonService, PagerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
