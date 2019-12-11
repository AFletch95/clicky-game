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
    message: "Click an image to begin",
    messageColor: "",
    colors: colors,
    clickedColors: [],

  }

  handleColorClick = (event) => {
    console.log(event.target.dataset.id)
    let colorID = event.target.dataset.id;

    if(this.state.clickedColors.includes(colorID)) {
      this.setState({message: "Game Over",
                    messageColor: "red",
                    clickedColors: [],
                    score: 0,
                  });
     // this.state.clickedColors.empty();
    }
    else {
      this.state.clickedColors.push(colorID)
      this.setState({message: "Correct!",
                    score: this.state.score + 10,
                  messageColor: "green"})
      
      console.log(this.state.clickedColors);
      for(let i=0;i<100;i++)
      window.setTimeout(this.handleColorShuffle);
    }

    

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
        <Topbar message={this.state.message} score={this.state.score} messageColor={this.state.messageColor}/>
        <Jumbotron />
        <Gameboard>

          {this.state.colors.map(obj => (
            <CharacterCards color={obj}
              myFunc={this.handleColorClick}
            />
          ))}

        </Gameboard>
      </div>
    );
  }
}

export default App;
