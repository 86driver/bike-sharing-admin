import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'

export default class Header extends Component {

  componentWillMount() {
    this.setState({
      userName: '河畔一脚'
    })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢饮, {this.state.userName}</span>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="breadcrumb-date">2019-07-06</span>
            <span className="breadcrumb-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}