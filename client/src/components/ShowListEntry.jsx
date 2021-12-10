import React from 'react';
var moment = require('moment');
// import ShowDetail from './ShowDetail.jsx';
import CastList from './CastList.jsx';


class ShowListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      casts: []
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo(id) {
    fetch(`https://api.tvmaze.com/shows/${this.props.show.id}/cast`)
      .then(function (response) {
        return response.json();
      }).then(data => {
        this.setState({ casts: data })
        console.log(data)
      })
      .catch(err => this.setState({ casts: [] }))
  }

  render() {
    console.log("CastList response", this.state.casts)
    return (

   <table>
      <tr>
        <tr>Show Name : {this.props.show.name} </tr><br />
        <img style={{ width: '310px' }} src={this.props.show.image.medium} /><br /><br />

        <tr>Show Type : {this.props.show.type} </tr>
        <tr>Date Primiered : {moment(this.props.show.premiered).format("MMM Do YYYY")} </tr>
        <tr>Date Ended : {moment(this.props.show.ended).format("MMM Do YYYY")} </tr><br />
        <tr>Cast Members :</tr>
        <CastList casts={this.state.casts} />
      </tr>
  </table>
 )
  }
}

export default ShowListEntry;
