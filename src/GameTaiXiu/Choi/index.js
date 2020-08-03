import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actionfunction from '../../Redux/actions/GameTaiXiuAction';
class Choi extends Component {
  render() {
    const {choiGame} = this.props;
    return (
      <div className="xi-ngau__play text-center">
          <button className="btn btn-success btn-lg" style={{ fontSize: 30, backgroundColor: 'white', color: '#d83226', fontWeight: 'bold' }}
            onClick={() => {choiGame()}}
          >
            Chơi Game
        </button>
        </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return{
    choiGame: () => {
      dispatch(actionfunction.choiGame())
    }
  }
}

export default connect(null, mapDispatchToProps)(Choi)
