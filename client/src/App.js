import React from "react";

// import "./App.css";
import axios from "axios";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")

      .then(response => {
        this.setState({ players: response.data });

        console.log(this.state.players);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      
        <div className="App">
          <h1>Women's World Cup</h1>

          {this.state.players.map(player => {
            return (
              <div>
                <p>Name: {player.name}</p>
                <p>Country: {player.country}</p>
                <p>Searches: {player.searches}</p>
                <p>id: {player.id}</p>
              </div>
            );
          })}
        </div>
        
    );
  }
}

const StyledDiv = styled.div`
  .App {
    background: gray;
    margin: 0 300px;
  }

  p {
    text-align: center;
    color: white;
  }
`;

export default App;
