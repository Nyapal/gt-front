import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Plant: {
        title: '',
        description: ''
      },
      plantList: []
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
  renderItems = () => {
    const { plantList } = this.state
    return plantList.map(plant => (
      <li key={plant.id}>
        <span>{plant.title}</span>
      </li>
    ))
  }
  render() {
    return (
      <div className="App">
      <h1> Green Thumb </h1>
      {this.renderItems()}
      </div>
    )
  }
}

export default Home