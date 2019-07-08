import React, { Component } from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'

export default class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radioSize: 'small'
    }
  }

  handleRadioClick = (e) => {
    this.setState({
      radioSize: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Card hoverable title="基础按钮">
          <Button type="primary">基础按钮1</Button>
          <Button>基础按钮2</Button>
          <Button type="dashed">基础按钮3</Button>
          <Button type="danger">基础按钮4</Button>
          <Button disabled>基础按钮5</Button>
        </Card>
        <Card hoverable title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button icon="download">下载</Button>
        </Card>
        <Card hoverable title="按钮组">
          <Radio.Group value={this.state.radioSize} onChange={this.handleRadioClick}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button size={this.state.radioSize}>按钮</Button>
        </Card>

      </div>
    )
  }
}