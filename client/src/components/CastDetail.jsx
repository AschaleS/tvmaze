
import React from 'react';
var moment = require('moment');
import CastListEntry from './CastListEntry.jsx';
import App from './App.jsx';


class CastDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      birthday: '',
      gender: '',
      image: ''
    }

  }
  componentDidMount() {
    this.getperson();
  }

  getperson(id) {
    fetch(`https://api.tvmaze.com/shows/${this.props.show.id}/cast`)
      .then(function (response) {
        return response.json();
      }).then(data => {
        this.setState({
          name: data.person.name,
          birthday: data.person.birthday,
          gender: data.person.gender,
          image: data.person.image.medium
        })
        console.log(data)
      })
      .catch(err => this.setState({
      name: '',
      birthday: '',
      gender: '',
      image: ''
    }))
  }



render() {
  return (

    <div>
      <ul>
        <li> Name: {this.state.name} </li><br />
        <li>BirthDay: {moment(this.state.birthday).format("MMM Do YYYY")} </li><br />
        <li>Gender: {this.state.gender}</li><br />
        <img style={{ width: '310px' }} src={this.state.image.medium} /><br /><br />

      </ul>
    </div>
  )
}
}

export default CastDetail;
