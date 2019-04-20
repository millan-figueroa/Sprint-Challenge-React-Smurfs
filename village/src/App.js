import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount() {

    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));

  }

  addSmurf = smurf => {

    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));

  }

  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/smurf-form' render={props => <SmurfForm {...props} addFunc={this.addSmurf}/>} />
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    </Router>
    );
  }
}

export default App;
