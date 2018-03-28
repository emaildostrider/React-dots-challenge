import React, { Component } from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'

import Pentagon from './Pentagon'
import { changeNumber } from './actions/AppActions'

class Drawer extends Component{

  handleChange(e){
    console.log(e.target.value)
    let number = e.target.value
    this.props.changeNumber(number)
  }

  isPositiveInteger(n) {
    return 0 === n % (!isNaN(parseFloat(n)) && 0 <= ~~n);
  }

  render(){
    const {number} = this.props
    return (
      <div>
        <div className="section">
          <div className="container text-center py-5">
            <h1>Dots challenge</h1>
            <p className="lead">Informe um número inteiro positivo.</p>
            <form>
            <div className="row justify-content-center">
                <div className="col-md-4">
                  <label htmlFor="firstName">Número</label>
                  <input type="text" name="number" className="form-control" onChange={(e) => this.handleChange(e)} value={number}/>
                </div>
            </div>
            </form>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div id="drawer">
              {number === "" ? <p>Informe o número</p> : this.isPositiveInteger(number) ? <Pentagon number={number} first /> : <p className="text-danger">Número inválido</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return{
  number: state.AppReducer.number
 }
}

export default connect(mapStateToProps, {changeNumber})(Drawer)