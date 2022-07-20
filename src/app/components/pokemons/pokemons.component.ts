import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPokemon } from 'src/app/IPokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: IPokemon[] = []
  filteredUsers: IPokemon[] = [];

  title: string = ""
  
  pokemonForm!: FormGroup
  
  paginaAtual : number = 1 ;
  contador : number = 5;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    
    this.pokemonService.get().subscribe(
      ({results}: any) => {
        this.pokemons = results;
        this.filteredUsers = [...this.pokemons];
      })
  }

  handleSearch = () => {
    this.filteredUsers = [...this.pokemons.filter(user => user.name.includes(this.title))];
   
    console.log(this.filteredUsers)
  }

}
