import React, { Component } from 'react'
import classNames from 'classnames'

class Dot extends Component{
  render(){
    const {left, top} = this.props
    return (
      <div style={{left, top}} className={classNames('dot', {'red': this.props.red})}></div>
    )
  }
}

export default Dot