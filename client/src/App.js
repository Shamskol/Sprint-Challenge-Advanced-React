import React from 'react';

import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
     data: [],

    };
  }
  


  componentDidMount() {
 debugger

axios.get ('http://localhost:5000/api/players')

      .then(response => {
        this.setState({data: response.data});
        debugger
// console.log(this.state.data);
// console.log(response.data)
     })
     .catch(error => { 

      console.log(error);
     
      });
    }

  render() {

    return (
      <div className="App">
        Hello
      </div>
    );
    }
  
}
  







export default App;







 