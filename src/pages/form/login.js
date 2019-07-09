import React, { Component } from 'react'
import { Card, Form, Input, Button, message } from 'antd'

const FormItem = Form.Item

class FormLogin extends Component {

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`欢迎回来~ ${userInfo.userName}`)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <div>
          <Card title="登录行内表单">
            <Form layout="inline">
              <FormItem>
                <Input placeholder="请输入用户名"></Input>
              </FormItem>
              <FormItem>
                <Input placeholder="请输入密码"></Input>
              </FormItem>
              <FormItem>
                <Button type="primary">登录</Button>
              </FormItem>
            </Form>
          </Card>
          <Card title="登录水平表单" style={{ marginTop: 10 }}>
            <Form layout="horizontal" style={{ width: 300 }}>
              <FormItem>
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
              <FormItem>
                {
                  getFieldDecorator('userPwd', {
                    initialValue: '123456',
                    rules: []
                  })
                    (
                      <Input placeholder="请输入用户名"></Input>
                    )
                }
              </FormItem>
              <FormItem>
                <Button type="primary" onClick={this.handleSubmit}>登录</Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}

export default Form.create()(FormLogin)