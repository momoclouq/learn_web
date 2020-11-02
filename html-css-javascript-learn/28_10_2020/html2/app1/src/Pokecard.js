import React, { Component } from "react";
import PropTypes from "prop-types";
import "./poke.css"

export default class Pokecard extends Component{
    render(){
        return(
            <li className="card">
                <div className="PokeName">{this.props.name}</div>
                <img src={this.props.image} alt={this.props.name}/>
                <div className="PokeType">{this.props.type}</div>
            </li>
        );
    }
}

Pokecard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string
};