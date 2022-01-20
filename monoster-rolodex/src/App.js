import React from 'react';
import axios from 'axios';
import { CardList } from './components/Card List/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField : ''
    }
  }
  componentDidMount(){
    const promise =  new Promise((resolve,reject)=>{
      resolve(axios.get('https://jsonplaceholder.typicode.com/users'))
    })
    promise.then((response)=>{
      this.setState({monsters:response.data})
    }).catch(failedValue=>console.log(failedValue))
  }
  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }
  render(){
    const {monsters,searchField}= this.state;
    const filteredMonsters = monsters.filter((monster)=> 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()) 
    )
    return(
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox  placeholder='Search Monsters' handleChange={this.handleChange} />
      <CardList monsters = {filteredMonsters} />
    </div>
    )
  }
}

export default App;
