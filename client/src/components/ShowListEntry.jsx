import React from 'react';
var moment = require('moment');
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
      })
      .catch(err => this.setState({ casts: [] }))
  }


  render() {
    return (
      <div>
        <span style={{ fontSize: '48px', fontWeight: 'bold', color: 'green' }}> {this.props.show.name} </span><br />
        <img style={{ width: '300px' }} src={this.props.show.image.medium} /><br /><br />
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'black', textAlign: 'left' }}>Show Type : </span><span style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>{this.props.show.type} </span><br />
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Date Primiered : </span><span style={{ fontSize: '16px', fontWeight: 'bold', color: 'blue' }}>{moment(this.props.show.premiered).format("MMM Do YYYY")} </span><br />
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Date Ended : </span> <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'blue' }}>{moment(this.props.show.ended).format("MMM Do YYYY")} </span><br /><br />
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Cast Members :</span>
        <CastList casts={this.state.casts} />
      </div>
    )
  }
}

export default ShowListEntry;
