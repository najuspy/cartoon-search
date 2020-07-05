import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx'
import {SearchBox} from './components/search-box/search-box.component.jsx'

import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state ={
      cartoons: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({cartoons: users}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() { //Object destructuring is done inside Render Function

    const {cartoons, searchField } = this.state;
    const filteredCartoons = cartoons.filter(cartoon =>
      cartoon.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className='App'>
      <h1>Cartoon Name Search</h1>
        <SearchBox 
          placeholder = 'Search Cartoon'
          handleChange={this.handleChange}
        />
        <CardList cartoons ={filteredCartoons} /> 
      </div>
    )
  }
}

export default App;
 