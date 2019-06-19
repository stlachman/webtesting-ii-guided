import React, { Component } from "react";

import PlayerList from "./players/PlayerList.js";
import "./App.css";

class App extends Component {
  state = {
    greeting: "Hello World",
    players: [
      {
        id: 1,
        name: "Rodolfo"
      },
      {
        id: 2,
        name: "Kayla"
      }
    ]
  };

  render() {
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        <button onClick={this.greetTeam}>Greet</button>
        <PlayerList players={this.state.players} />
      </div>
    );
  }

  greetTeam = () => {
    this.setState({ greeting: "Hello Developers" });
  };
}

export default App;
