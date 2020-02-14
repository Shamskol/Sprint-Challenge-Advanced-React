import React from "react";

// import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./components/components/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
      <StyledDiv>
        <Navbar/>
         
      
        
        <div className="App">
          
          {this.state.players.map(player => {
            return (
              <div key = {player.id}>
                <h2>Name: {player.name}</h2>
                <h2>Country: {player.country}</h2>
                <h2>Searches: {player.searches}</h2>
                <h2>id: {player.id}</h2>
              </div>
            );
          })}
        </div>
        </StyledDiv> 
    );
  }
}

const StyledDiv  = styled.div`
 width: 600px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 15px;
  background-color: blueviolet;
  text-align: center;
  padding: 20px; 
  color: white;
  margin-bottom: 5px
  

h2, h1 {
  text-align: center;
  color: white
}

`;



export default App;
