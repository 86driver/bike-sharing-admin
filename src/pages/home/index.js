import React, { Component } from 'react'
import './index.less'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="home-wrap">
        欢迎登录共享单车后台管理系统
      </div>
    )
  }
}