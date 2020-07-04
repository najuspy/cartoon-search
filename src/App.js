import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      string:'Hello, Najus'
    }
  }

  render() {
    return(
      <div>
      <p> {this.state.string} </p>
      <button onClick={()=> this.setState({ string: 'Hello Anita' })}>Change Text </button>
      </div>
    )
  }
}

export default App;
