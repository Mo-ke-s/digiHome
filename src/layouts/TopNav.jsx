import React, { useState } from 'react';
import { Menu } from 'antd';
import style from './index.css';

const items = [
  {
    label: "首页",
    key: "首页"
  },
  {
    label: "产品与解决方案",
    key: "产品与解决方案",
    children: [
      {
        /* type: "group", */
        label: "SkyEye",
        children: [
          {
            label: "SkyEye 应用案例",
            key: "SkyEye 应用案例"
          },
          {
            label: "支持处理器列表",
            key: "支持处理器列表"
          },
          {
            label: "支持外设列表",
            key: "支持外设列表"
          },
          {
            label: "嵌入式软件测试工具",
            key: "嵌入式软件测试工具"
          },
          {
            label: "安装教程",
            key: "安装教程"
          }
        ]
      },
      {
        label: "ModelCoder",
        key: "ModelCoder",
        children: [
          {
            label: "ModelCoder 主要功能",
            key: "ModelCoder 主要功能"
          },
          {
            label: "ModelCoder 应用案例",
            key: "ModelCoder 应用案例"
          },
          {
            label: "支持算法模型",
            key: "支持算法模型"
          }
        ]
      },
      {
        label: "DigiThread",
        key: "DigiThread",
        children: [
          {
            label: "DigiThread 应用案例",
            key: "DigiThread 应用案例"
          }
        ]
      },
      {
        label: "嵌入式 DevOps 解决方案",
        key: "嵌入式 DevOps 解决方案"
      },
      {
        label: "数字样机解决方案",
        key: "数字样机解决方案"
      },
      {
        label: "Open-SkyEye 开源社区",
        key: "Open-SkyEye 开源社区"
      }
    ]
  },
  {
    label: "媒体中心",
    key: "媒体中心",
    children: [
      {
        label: "新闻动态",
        key: "新闻动态"
      },
      {
        label: "技术文章",
        key: "技术文章",
        children: [
          {
            label: "DevOps",
            key: "DevOps"
          },
          {
            label: "MBSE",
            key: "MBSE"
          },
          {
            label: "最佳实践",
            key: "最佳实践"
          },
          {
            label: "干货分享",
            key: "干货分享"
          }
        ]
      },
      {
        label: "专题视频",
        key: "专题视频"
      }
    ]
  },
  {
    label: "人才战略",
    key: "人才战略",
    children: [
      {
        label: "社会招聘",
        key: "社会招聘"
      },
      {
        label: "校园招聘",
        key: "校园招聘"
      },
      {
        label: "实习招聘",
        key: "实习招聘"
      }
    ]
  },
  {
    label: "关于迪捷",
    key: "关于迪捷",
    children: [
      {
        label: "公司简介",
        key: "公司简介"
      },
      {
        label: "资质荣誉",
        key: "资质荣誉"
      },
      {
        label: "合作伙伴",
        key: "合作伙伴"
      },
      {
        label: "联系我们",
        key: "联系我们"
      }
    ]
  },
  {
    label: (<a href="https://www.digiproto.com/index.php?lang=en" className={style.englishLink}>English</a>),
    key: "English"
  }
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);// 当前选中的菜单
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={style.menu} />;
};
export default App;
