import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default class NoMatch extends Component {

  render() {
    return (
      <div className="nao-match">
        您的页面走丢了~
      </div>
    )
  }
}