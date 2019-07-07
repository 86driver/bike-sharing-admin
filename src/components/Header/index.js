import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Util from '../../utils/utils'
import HTTP from '../../axios/http'
import './index.less'

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      sysTime: '',
      dayPictureUrl: '',
      weather: ''
    }
  }

  componentWillMount() {
    this.setState({
      userName: '河畔一角'
    })
    setInterval(() => {
      this.setState({
        sysTime: Util.formatEDate(new Date().getTime())
      })
    }, 1000);
    this.getWeatherAPIData()
  }

  getWeatherAPIData = () => {
    let city = '深圳'
    HTTP.Jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0]
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎， {this.state.userName}</span>
            <a href="">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={5} className="breadcrumb-title">
            首页
          </Col>
          <Col span={19} className="weather">
            <span className="breadcrumb-date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}