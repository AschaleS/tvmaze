import React from 'react';
var moment = require('moment');


class CastDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props.func();
    this.state = {
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
        <span> Name: {this.props.cast.perosn.name} </span>
        <span>BirthDay: {moment(this.props.cast.person.birthday).format("MMM Do YYYY")} </span>
        <span>Gender: {this.props.cast.person.gender}</span>
        <img style={{ width: '310px' }} src={this.props.cast.person.image.medium} />
      </div>

    )
  }
}

export default CastDetail;

