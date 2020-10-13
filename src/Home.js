import React from 'react';
import './Home.css'
// import { Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Plant: {
        title: '',
        description: ''
      },
      plantList: [],
      spotlight: []
    }
  }
  componentDidMount() {
    this.refreshList()
  }
  refreshList = () => {
    axios
      .get('http://localhost:8000/api/plants')
      .then(res => this.setState({ plantList: res.data }))
      .catch(err => console.log(err))
  }
  shuffleList = () => {
    // shuffle through the entire list & display three plants
    const { plantList } = this.state
    let spotlight = []
    let len = 0
    // one spotlight has a length of three display 3 (the test)
    while (len < 4) {
      // randomly choose plant from plantList
      let plant = plantList[Math.floor(Math.random() * plantList.length)]
      // check if item in plantList 
      let dupCheck = spotlight.includes(plant) 
      if (dupCheck === false) {
        // add plant to spotlight list
        spotlight.push(plant)
      }
      len += 1
    } 

    if (spotlight.length > 2) {
      return spotlight.map(plant => (
        <li key={plant.id} className="sPlant">
            <h3>{plant.title}</h3>
        </li>
      ))
    }
  }

  render() {
    return (
      <div className="App">
      <h1 style={{textAlign: 'center'}}> Green Thumb </h1>
        <div style={{textAlign: 'center'}}>
          {this.shuffleList()}
        </div>
      </div>
    )
  }
}

export default Home