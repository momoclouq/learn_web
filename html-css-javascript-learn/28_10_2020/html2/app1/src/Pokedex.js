import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./poke.css"

export default class PokeDex extends Component{
    render(){
        let Pokes = this.props.listOfPoke.map(poke => {
            return(
                <Pokecard
                    key={poke.id}
                    name={poke.name}
                    type={poke.type}
                    image={poke.image}
                />
            );
        });

        return(
            <div>
                <div id="intro">Pokedex</div>
                <ul className="dex">{Pokes}</ul>
            </div>
        );
    }
}

PokeDex.defaultProps = {
    listOfPoke: [
        {
          id: 1,
          name: "Charmander",
          type: "fire",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
          id: 2,
          name: "Squirtle",
          type: "water",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
          id: 3,
          name: "Butterfree",
          type: "flying",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
          id: 4,
          name: "Rattata",
          type: "normal",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
          id: 5,
          name: "Metapod",
          type: "bug",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
      ]
}