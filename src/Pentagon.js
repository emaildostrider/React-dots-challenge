import React, { Component } from 'react'
import shortid from 'shortid'

import Dot from './Dot'

class Pentagon extends Component{

  progressionPentagon(n){
    return (((5 * (n * n)) - (5 * n) + 2) / 2)
  }

  progression(n){
    return (n * 5) - 5
  }

  dots(number, first){
    var dotsList = []
    if(number > 0){
      const sides = 5
      const size = 28 * (number - 1)
      const Xcenter = 170
      const Ycenter = 180
      const step  = 2 * Math.PI / sides
      const shift = (Math.PI / 180.0) * -18

      var points = []
      for (var i = 0; i <= sides;i++) {
        var curStep = i * step + shift
        var x = Xcenter + size * Math.cos(curStep)
        var y = Ycenter + size * Math.sin(curStep)
        points.push({x,y})
      }

      var linePoints = []
      for (var l = 0; l < points.length - 1; l++){
        linePoints.push(points[l])
        if(number > 2){
          var percentage = 1/(number-1)
          for (var z = 0; z < number; z++){
            var point = {}
            point.x = points[l].x + (points[l+1].x - points[l].x) * (percentage * z);
            point.y = points[l].y + (points[l+1].y - points[l].y) * (percentage * z);
            linePoints.push(point)
          }
        }
      }

      for(var i = 0; i < linePoints.length; i++){
        dotsList.push(<Dot key={shortid.generate()} left={linePoints[i].x} top={linePoints[i].y} red={first} />)
      }
    }
    return dotsList
  }

  render(){
    const {number, first} = this.props
    const next = number - 1
    return (
      <div>
      {this.dots(number, first)}
      {next > 0 && <Pentagon number={next} />}
      </div>
      )
  }
}

export default Pentagon