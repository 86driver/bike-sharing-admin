import React, { Component } from 'react'
import { Card, Table, Radio } from 'antd'
import { getTableList } from '../../axios/api'
// import { Record } from 'immutable';
import Util from '../../utils/utils'

export default class BasicTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      dataSource2: [],
      selectedRowKeys: [],
      selectedItem: [],
      selectIds: [],
      selectedRows: [],
      pagination: '',
    }
  }

  pageParam = {
    page: 1
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

    dataSource.map((item, index) => {
      item.key = index
    })

    this.setState({
      dataSource
    })

    this.getTableData()
  }

  getTableData = () => {
    getTableList({
      params: this.pageParam
    }).then((res) => {
      let _this = this
      res.list.map((item, index) => {
        item.key = index
      })
      this.setState({
        dataSource2: res.list,
        pagination: Util.pagination(res, (current) => {
          _this.pageParam.page = current
          this.getTableData()
        })
      })
    })
  }

  onRowClick = (record, index) => {
    let selectKey = [index]
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record,
    })
  }
  render() {

    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(status) {
          let config = {
            '1': '小学生',
            '2': '初中生',
            '3': '高中生',
            '4': '大学生',
            '5': '硕士',
          }
          return config[status]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(status) {
          let config = {
            '1': '篮球',
            '2': '足球',
            '3': '羽毛球',
            '4': '乒乓球',
            '5': '游泳',
            '6': '跑步',
            '7': '吉他',
            '8': '跳舞',
          }
          return config[status]
        }
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

    const rowSelection = {
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys
    }

    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        let ids = []
        selectedRows.map((item) => {
          ids.push(item.id)
        })
        this.setState({
          selectedRowKeys,
          selectedRows,
          selectIds: ids,
        })
      }
    }

    return (
      <div>
        <Card title="基础表格" >
          <Table bordered dataSource={this.state.dataSource} columns={columns} pagination={false}></Table>
        </Card>
        <Card title="动态数据渲染表格" style={{ margin: '10px' }} >
          <Table bordered dataSource={this.state.dataSource2} columns={columns} pagination={false}></Table>
        </Card>
        <Card title="Mock-单选" style={{ margin: '10px' }} >
          <Table onRow={(record, index) => {
            return {
              onClick: () => {
                this.onRowClick(record, index)
              }
            }
          }} rowSelection={rowSelection} dataSource={this.state.dataSource2} bordered columns={columns} pagination={false}></Table>
        </Card>
        <Card title="Mock-多选" style={{ margin: '10px' }} >
          <Table
            rowSelection={rowCheckSelection} dataSource={this.state.dataSource2} bordered columns={columns} pagination={false}></Table>
        </Card>
        <Card title="Mock-表格分页" style={{ margin: '10px' }} >
          <Table
            dataSource={this.state.dataSource2} bordered columns={columns} pagination={this.state.pagination} ></Table>
        </Card>
      </div>
    )
  }
}
