import { isUrl } from '../utils/utils';

const menuData = [{
  name: '个人中心',
  icon: 'user',
  path: 'user-center',
  children: [{
    name: '首页',
    path: 'main-page',
  }, {
    name: '个人信息',
    path: 'user-info',
  }, {
    // name: '工作台',
    // path: 'workplace',
    // hideInMenu: true,
  }],
}, {  
  name: '我要借款',
  icon: 'bank',
  path: 'borrow',
  children: [{
    name: '新的借款',
    path: 'borrow-new',
  }, {
    name: '所有借款',
    path: 'borrow-list',
  }, {
    name: '借款合同',
    path: 'borrow-contract',
    hideInMenu: true,
  }],
}, {  
  name: '我要投资',
  icon: 'red-envelope',
  path: 'invest',
  children: [{
    name: '所有项目',
    path: 'invest-all',
  }, {
    name: '我的投资',
    path: 'invest-my',
  }, {
    name: '新的投资',
    path: 'invest-new',
    hideInMenu: true,
  }],
}, {
  name: 'dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  hideInMenu: true,
  children: [{
    name: '分析页',
    path: 'analysis',
  }, {
    name: '监控页',
    path: 'monitor',
  }, {
    name: '工作台',
    path: 'workplace',
    // hideInMenu: true,
  }],
}, {
  name: '表单页',
  icon: 'form',
  path: 'form',
  hideInMenu: true,
  children: [{
    name: '基础表单',
    path: 'basic-form',
  }, {
    name: '分步表单',
    path: 'step-form',
  }, {
    name: '高级表单',
    authority: 'admin',
    path: 'advanced-form',
  }],
}, {
  name: '列表页',
  icon: 'table',
  path: 'list',
  hideInMenu: true,
  children: [{
    name: '查询表格',
    path: 'table-list',
  }, {
    name: '标准列表',
    path: 'basic-list',
  }, {
    name: '卡片列表',
    path: 'card-list',
  }, {
    name: '搜索列表',
    path: 'search',
    children: [{
      name: '搜索列表（文章）',
      path: 'articles',
    }, {
      name: '搜索列表（项目）',
      path: 'projects',
    }, {
      name: '搜索列表（应用）',
      path: 'applications',
    }],
  }],
}, {
  name: '详情页',
  icon: 'profile',
  path: 'profile',
  hideInMenu: true,
  children: [{
    name: '基础详情页',
    path: 'basic',
  }, {
    name: '高级详情页',
    path: 'advanced',
    authority: 'admin',
  }],
}, {
  name: '结果页',
  icon: 'check-circle-o',
  path: 'result',
  hideInMenu: true,
  children: [{
    name: '成功',
    path: 'success',
  }, {
    name: '失败',
    path: 'fail',
  }],
}, {
  name: '异常页',
  icon: 'warning',
  path: 'exception',
  hideInMenu: true,
  children: [{
    name: '403',
    path: '403',
  }, {
    name: '404',
    path: '404',
  }, {
    name: '500',
    path: '500',
  }, {
    name: '触发异常',
    path: 'trigger',
    // hideInMenu: true,
  }],
}, {
  name: '账户',
  icon: 'user',
  path: 'user',
  authority: 'guest',
  children: [{
    name: '登录',
    path: 'login',
  }, {
    name: '注册',
    path: 'register',
  }, {
    name: '注册结果',
    path: 'register-result',
  }],
}, {
  name: '使用文档',
  icon: 'book',
  hideInMenu: true,
  path: 'http://pro.ant.design/docs/getting-started',
  target: '_blank',
}];

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
