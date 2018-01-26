import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Card, Badge, Table, Divider, Button, Tooltip, Icon, InputNumber, Radio, Select } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import DescriptionList from '../../components/DescriptionList';
import styles from './UserInfo.less';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Description } = DescriptionList;

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchBasic'],
}))
@Form.create()
export default class UserInfo extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profile/fetchBasic',
    });
  }

  render() {
    const { submitting } = this.props;
    const { getFieldDecorator, getFieldValue } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    return (
      <PageHeaderLayout title="完善个人信息" content="">
        <Card bordered={false}>
          <Form
            onSubmit={this.handleSubmit}
            hideRequiredMark
            style={{ marginTop: 8 }}
          >
            <FormItem
              {...formItemLayout}
              label="姓名"
            >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: '请输入姓名',
                }],
              })(
                <Input placeholder="张三" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="身份证号"
            >
              {getFieldDecorator('idcard', {
                rules: [{
                  required: true, message: '请输入身份证号',
                }],
              })(
                <Input placeholder="12132231321313210" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机号"
            >
              {getFieldDecorator('phone', {
                rules: [{
                  required: true, message: '请输入手机号码',
                }],
              })(
                <Input placeholder="12345678901" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="住址"
            >
              {getFieldDecorator('address', {
                rules: [{
                  required: true, message: '住址',
                }],
              })(
                <Input placeholder="火星" />
              )}
            </FormItem>
            {/* <FormItem
              {...formItemLayout}
              label="起止日期"
            >
              {getFieldDecorator('date', {
                rules: [{
                  required: true, message: '请选择起止日期',
                }],
              })(
                <RangePicker style={{ width: '100%' }} placeholder={['开始日期', '结束日期']} />
              )}
            </FormItem> 
            <FormItem
              {...formItemLayout}
              label="目标描述"
            >
              {getFieldDecorator('goal', {
                rules: [{
                  required: true, message: '请输入目标描述',
                }],
              })(
                <TextArea style={{ minHeight: 32 }} placeholder="请输入你的阶段性工作目标" rows={4} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="衡量标准"
            >
              {getFieldDecorator('standard', {
                rules: [{
                  required: true, message: '请输入衡量标准',
                }],
              })(
                <TextArea style={{ minHeight: 32 }} placeholder="请输入衡量标准" rows={4} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  客户
                  <em className={styles.optional}>
                    （选填）
                    <Tooltip title="目标的服务对象">
                      <Icon type="info-circle-o" style={{ marginRight: 4 }} />
                    </Tooltip>
                  </em>
                </span>
              }
            >
              {getFieldDecorator('client')(
                <Input placeholder="请描述你服务的客户，内部客户直接 @姓名／工号" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<span>邀评人<em className={styles.optional}>（选填）</em></span>}
            >
              {getFieldDecorator('invites')(
                <Input placeholder="请直接 @姓名／工号，最多可邀请 5 人" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<span>权重<em className={styles.optional}>（选填）</em></span>}
            >
              {getFieldDecorator('weight')(
                <InputNumber placeholder="请输入" min={0} max={100} />
              )}
              <span>%</span>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="目标公开"
              help="客户、邀评人默认被分享"
            >
              <div>
                {getFieldDecorator('public', {
                  initialValue: '1',
                })(
                  <Radio.Group>
                    <Radio value="1">公开</Radio>
                    <Radio value="2">部分公开</Radio>
                    <Radio value="3">不公开</Radio>
                  </Radio.Group>
                )}
                <FormItem>
                  {getFieldDecorator('publicUsers', {
                    })(
                      <Select
                        mode="multiple"
                        placeholder="公开给"
                        style={{
                          margin: '8px 0',
                          display: getFieldValue('public') === '2' ? 'block' : 'none',
                        }}
                      >
                        <Option value="1">同事甲</Option>
                        <Option value="2">同事乙</Option>
                        <Option value="3">同事丙</Option>
                      </Select>
                    )}
                </FormItem>
              </div>
            </FormItem> */}
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              {/* <Button type="primary" htmlType="submit" loading={submitting}>
                提交
              </Button> */}
              <Button style={{ marginLeft: 8 }}>保存</Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderLayout>
    );
  }
}
