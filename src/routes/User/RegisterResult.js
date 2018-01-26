import React from 'react';
import { Button } from 'antd';
import { Link } from 'dva/router';
import Result from '../../components/Result';
import styles from './RegisterResult.less';

const actions = (
  <div className={styles.actions}>
    {/* <a href=""><Button size="large" type="primary">查看邮箱</Button></a> */}
    <Link to="/user/login"><Button size="large">前往登录</Button></Link>
  </div>
);

export default ({ location }) => (
  <Result
    className={styles.registerResult}
    type="success"
    title={
      <div className={styles.title}>
        你的账户：{location.state ? location.state.account : 'SomeUser'} 注册成功
      </div>
    }
    description=""
    actions={actions}
    style={{ marginTop: 56 }}
  />
);
