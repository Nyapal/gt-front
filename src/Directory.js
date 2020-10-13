import React from 'react';
import axios from 'axios';
import './Directory.css';

class Directory extends React.Component {
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
  displayList = () => {
    const { plantList } = this.state 

    console.log(plantList)
    if (plantList.length > 2) {
      return plantList.map(plant => ( 
          <li key={plant.id} className="pListItem">
            <h5 className="pTitle">{plant.title}</h5>
            <p className="pDesc">{plant.description}</p>
          </li>
      ))
      // return plantList.map(plant => {
      //   <li> 
      //       <h5>{plant.title}</h5>
      //       <p>{plant.description}</p>
      //   </li>
      // })
    }
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}> Directory </h1>
          <div className="displayList">
            {this.displayList()}
          </div>
      </div>

    )
  }
}

export default Directory