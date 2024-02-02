import style from './index.css';

const items = [
  { key: 0, content: "汽车软件开发模式的5个特点", time: "2024-01-30 " },
  { key: 1, content: "迪捷软件加入高端工业软件创新发展领航计划", time: "2024-01-22 " },
  { key: 2, content: "基于SkyEye仿真飞腾处理器：运行U-Boot并加载Phytium-FreeRTOS", time: "2024-01-19 " },
  { key: 3, content: "基于SkyEye仿真6678处理器：实现国产操作系统ReWorks仿真运行", time: "2024-01-12 " },
  { key: 4, content: "科普：嵌入式多核并行仿真", time: "2024-01-05 " },
  { key: 5, content: "2023年航天大事件", time: "2023-12-27 " },
  { key: 6, content: "喜报｜迪捷软件“ModelCoder 建模及形式化验证代码生成软件”荣登浙江省首版次产品目录", time: "2023-12-22 " },
  { key: 7, content: "多领域协同仿真——数据回放篇", time: "2023-12-22" }
];

const App = () => {
  return (
    <div className={style.LatestNews}>
      <div>
        <p style={{ fontSize: "30px", "textAlign": "center", "font-weight": 300, margin: 0, padding: "10px 0 5px 0" }}>最新动态</p>
        <div class={style.titleIcon}></div>
        <p style={{ fontSize: "15px", "textAlign": "center" }}>LATEST NEWS</p>
      </div>
      <ul className={style.NewsLinkList}>
        {items.map((item) => {
          return (
            <li key={item.key} className={style.NewsLinkListLi}><a style={{ overflow: "hidden" }}>{item.content}</a><span style={{ "font-size": "12px" }}>{item.time}</span></li>
          )
        })}
      </ul>
    </div>
  )
};

export default App;