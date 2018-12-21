import React, { Component } from 'react'
import { Input, Button, notification } from 'antd';

const { TextArea } = Input;

export default class ToolPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  addText = () => {
    const { text } = this.state
    this.props.addText(this.state.text || '')
  }
  changeState = (key, value) => {
    this.setState({ [key]: value })
  }
  render() {
    const { text } = this.state
    return (
      <div>
        <TextArea rows={4} value={text} onChange={e => this.changeState('text', e.target.value)} />
        <Button type="primary" onClick={this.addText} disabled={!text}>添加文字</Button>
      </div>
    )
  }
}