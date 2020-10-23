import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  renderBands = () => {return this.props.bands.map(b => <Band band={b} key={b.id} delete={this.props.deleteBand} />)}

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name }),
  deleteBand: band => dispatch({ type: 'DELETE_BAND', id: band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
