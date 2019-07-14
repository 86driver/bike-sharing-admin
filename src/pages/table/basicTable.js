import React, { Component } from 'react'
import { Card, Table } from 'antd'

export default class BasicTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {

    const dataSource = [
      {
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '洪浪北上华村',
        time: '09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '洪浪北上华村',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '洪浪北上华村',
        time: '09:00'
      }
    ]

    this.setState({
      dataSource
    })
  }

  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex'
      },
      {
        title: '状态',
        dataIndex: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest'
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      }
    ]

    return (
      <div>
        <Card title="基础表格" >
          <Table bordered dataSource={this.state.dataSource} columns={columns} pagination={false}></Table>
        </Card>
      </div>
    )
  }
}
