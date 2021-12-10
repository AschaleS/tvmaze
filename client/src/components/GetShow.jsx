import React from 'react';

class GetShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  onOriginChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  getInfo() {
    this.props.onGetShow(this.state.name);
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div>
        <div style={{ color: "black", float: "left", padding: "3px"}}>
          <label style={{ fontSize: "18px"}}>Enter Show Name  </label>
          <input style={{ width: "250px", height: "20px" }} value={this.state.origin} onChange={this.onOriginChange.bind(this)} />
        </div>
        <button onClick={this.getInfo.bind(this)} style={{ color: "navy", padding: "5px", fontWeight: "bold" }}> Get Show Detail </button>
      </div>
    )
  }
}

export default GetShow;