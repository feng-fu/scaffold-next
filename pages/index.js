import React, { Component } from 'react'
import { fabric } from 'fabric'
// import styles from '../static/index.less'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      canvas: null      
    }
  }
  render() {
    return (
      <div>
        <canvas ref={(el) => this.cancasEl = el} width="500" height="500"></canvas>
      </div>
    )
  }

  /**
   * test fabric
   */

  addImage() {
    
  }

  componentDidMount() {
    this.setState({ canvas: new fabric.Canvas(this.cancasEl) })
  }
  componentWillUnmount() {
    this.setState({ canvas: null })
  }
}
