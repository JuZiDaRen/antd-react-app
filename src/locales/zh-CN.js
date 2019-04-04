import exception from './zh-CN/exception';
import form from './zh-CN/form';
import globalHeader from './zh-CN/globalHeader';
import menu from './zh-CN/menu';
import result from './zh-CN/result';
import settings from './zh-CN/settings';
import component from './zh-CN/component';

export default {
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.home.introduce': '介绍',
  'app.forms.basic.title': '基础表单',
  'app.forms.basic.description':
    '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
    'app.title':'视界云',
  ...exception,
  ...form,
  ...globalHeader,
  ...menu,
  ...result,
  ...settings,
  ...component,
};
