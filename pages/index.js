import React, { Component } from 'react'
import { fabric } from 'fabric'
// import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import ToolPanel from '../components/toolPanel'
import styles from '../static/index.less'
// @connect(({ canvas }) => ({
//   layers: canvas.layers
// }))
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
        <Row>
          <Col span={4}>
            1
          </Col>
          <Col span={16}>
            <div className={styles.canvasContainer}>
              <canvas className={styles.canvas} ref={(el) => this.canvasEl = el} width="500" height="500"></canvas>
            </div>
          </Col>
          <Col span={4}>
            <ToolPanel addText={this.addText} />
          </Col>
        </Row>
      </div>
    )
  }

  /**
   * test fabric
   */

  addImage() {
    
  }

  addText = (txt) => {
    var text = new fabric.Text(txt, {left: 0, top: 0})
    this.state.canvas.add(text)
  }

  componentDidMount() {
    this.setState({ canvas: new fabric.Canvas(this.canvasEl) })
  }
  componentWillUnmount() {
    this.setState({ canvas: null })
  }
}
