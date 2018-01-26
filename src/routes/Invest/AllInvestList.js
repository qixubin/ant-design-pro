import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Divider } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import DescriptionList from '../../components/DescriptionList';
import styles from './AllInvestList.less';

const { Description } = DescriptionList;
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="">Delete</a>
      <Divider type="vertical" />
      <a href="" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

@connect(state => ({
  profile: state.profile,
}))
export default class AllInvestList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profile/fetchBasic',
    });
  }

  render() {
    const { profile } = this.props;
    

    const { basicLoading } = profile;

    const basicGoods = [
      {
        time: '12/11/2017',
        
        money: '5000',
        dura: '12',
        borrower: '张三',
        state: '投资',
      },
      {
        time: '12/10/2017',
        
        money: '3322',
        dura: '12',
        borrower: '张三',
        state: '投资',
      },
      {
        time: '12/09/2017',
        
        money: '1999',
        dura: '12',
        borrower: '李四',
        state: '投资',
      },
      {
        time: '12/08/2017',
        
        money: '5000',
        dura: '12',
        borrower: '李四',
        state: '投资',
      },
    ];

    let goodsData = [];
    if (basicGoods.length) {
      let num = 0;
      let amount = 0;
      basicGoods.forEach((item) => {
        num += Number(item.num);
        amount += Number(item.amount);
      });

      // goodsData = basicGoods.concat({
      //   id: '总计',
      //   num,
      //   amount,
      // });

      goodsData = basicGoods;
    }
    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === basicGoods.length) {
        obj.props.colSpan = 0;
      }
      return obj;
    };
    const goodsColumns = [{
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      render: renderContent,
    }, {
      title: '金额',
      dataIndex: 'money',
      key: 'money',
      render: renderContent,
    }, {
      title: '期数',
      dataIndex: 'dura',
      key: 'dura',
      render: renderContent,
    }, {
      title: '借款人',
      dataIndex: 'borrower',
      key: 'borrower',
      render: renderContent,
    }, {      
      title: '操作',
      dataIndex: 'state',
      key: 'state',
      align: 'right',
      render: () => (
        <Fragment>
          <a href="#/invest/invest-new">投资</a>
          
        </Fragment>
      ),
    },
    ];
    return (
      <PageHeaderLayout title="所有项目">
        <Card bordered={false}>
          <Table
            style={{ marginBottom: 24 }}
            pagination={false}
            loading={basicLoading}
            dataSource={goodsData}
            columns={goodsColumns}
            rowKey="id"
          />

        </Card>
      </PageHeaderLayout>
    );
  }
}
