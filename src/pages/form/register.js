import React, { Component } from 'react'
import {
  Card, Form, Input, Button, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message
}
  from 'antd'
import moment from 'moment'

const FormItem = Form.Item

class FormRegister extends Component {

  render() {
    const { getFieldDecorator } = this.props.form
    const FormItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <FormItem label="用户名" {...FormItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: 'yanb',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })
                  (
                    <Input placeholder="请输入用户名"></Input>
                  )
              }
            </FormItem>
            <FormItem label="密码" {...FormItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  initialValue: '123456',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })
                  (
                    <Input placeholder="请输入密码"></Input>
                  )
              }
            </FormItem>
            <FormItem label="生日" {...FormItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2019-07-11'),
                })
                  (
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
                  )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormRegister)
