import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      title: "Search Monster Names"
    };
  }

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1 class="monster-head">{ title }</h1>
        <SearchBox
          placeholder="Search Monsters" 
          handleChange ={e => this.setState({ searchField: e.target.value, title: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
}

export default App;
