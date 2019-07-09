import React, { Component } from 'react'
import {
  Card, Form, Input, Button, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message
}
  from 'antd'

const FormItem = Form.Item

class FormRegister extends Component {

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <FormItem label="用户名">
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
            <FormItem label="密码">
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
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormRegister)
