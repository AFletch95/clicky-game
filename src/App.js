import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Topbar from "./components/Topbar";
import CharacterCards from "./components/CharacterCards";
import colors from "./components/colors.json";
import Gameboard from "./components/Gameboard";


class App extends Component {

  state = {
    score: 0,
    topscore: 0,
    message: "Click an image to begin",
    colors: colors,
    clickedColors: [],

  }

  handleColorClick = (event) => {
    console.log(event.target.dataset.id)
  }

  handleColorShuffle = () => {
    let shuffleArr = this.state.colors.slice();
    shuffleArr.sort(() => Math.random() - 0.5);
    console.log("shuffle")
    this.setState({ colors: shuffleArr })
  }
  render() {
    return (
      <div className="App">
        <Topbar message={this.state.message} score={this.state.score} topscore={this.state.topscore} />
        <Jumbotron />
        <Gameboard>

          {this.state.colors.map(obj => (
            <CharacterCards color={obj}
              myFunc={this.handleColorShuffle}
            />
          ))}

        </Gameboard>
      </div>
    );
  }
}

export default App;
