import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GetShow from './GetShow.jsx';
import ShowListEntry from './ShowListEntry.jsx';
import CastDetail from './CastDetail.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    this.getShow();
  }
  getShow(query) {
    if (query) {
      fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
        .then(function (response) {
          return response.json();
        }).then(data => {
          this.setState({ show: data })
          console.log(data)

        })
        .catch(err => this.setState({ show: {} }))
    } else {
      this.setState({ show: {} })
    }

  }


  render() {
    if (this.state.show.name === undefined) {
      return (
        <div style={{marginLeft: '50px'}}>
          <h1 style={{ color: "blue"}}>TVMaze Show </h1>
          <GetShow onGetShow={this.getShow.bind(this)} />

        </div>)
    } else {
      return (

        <div style={{marginLeft: '80px'}}>
           <h1 style={{ color: "blue" }}>TVMaze Show Details</h1>
          <ShowListEntry show={this.state.show} />


        </div>
      )
    }
  }
}

export default App;