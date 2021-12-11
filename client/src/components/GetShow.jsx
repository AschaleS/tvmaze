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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "black", padding: "3px", fontWeight: "bold", height: "100%", textAlign: 'center' }}>
          <label style={{ fontSize: "28px" }}>Enter Show Name  :</label>
          <input style={{ width: "250px", height: "20px" }} value={this.state.origin} onChange={this.onOriginChange.bind(this)} />
        </div>
        <button onClick={this.getInfo.bind(this)} style={{
          marginLeft: '93px', color: "navy", fontWeight: "bold", backgroundColor: "#57e5c3", borderTop: '1px solid #CCCCCC',
          borderRight: '1px solid #333333', borderBottom: '1px solid #333333', borderLeft: '1px solid #CCCCCC'
        }}>  Get Show Detail </button>
      </div>
    )
  }
}

export default GetShow;