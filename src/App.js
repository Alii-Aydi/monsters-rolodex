import { Component } from 'react';
import './App.css';
import CardList from './components/cardList/CardList.component';
import SearchBox from './components/searchBar/SearchBar.component';

class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      searchBar: ''
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      this.setState(() => { return { users: users } })
    } catch (e) {
      console.log('Error')
    }
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return {
        searchBar: e.target.value
      }
    })
  }

  filterMonsters = () => {
    return this.state.users.filter((u) => {
      return u.name.toLowerCase().includes(this.state.searchBar.toLowerCase())
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Roledex</h1>
        <SearchBox className={'search-box-monsters'} placeholder={'monsters'} onChangeHandler={this.onSearchChange}></SearchBox>
        <CardList filterMonsters={this.filterMonsters()}></CardList>
      </div >
    );
  }
}

export default App;
