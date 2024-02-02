import style from './index.css';
import ProductCard from './ProductCard.jsx';

const SoftwareDefinitionCar = [
  {
    key: 0,
    title: "源代码调试",
    description: "基于SkyEye仿真的远程调试",
    src: require("../assets/Card/源代码调试.png"),
  },
  {
    key: 1,
    title: "虚拟标定",
    description: "大大减少ECU标定测试任务工作量",
    src: require("../assets/Card/虚拟标定.png"),
  },
  {
    key: 2,
    title: "协同仿真",
    description: "与多种仿真工具进行数据交互",
    src: require("../assets/Card/协同仿真.png"),
  },
  {
    key: 3,
    title: "工具集成",
    description: "基于ECUTest的ECU软件测试",
    src: require("../assets/Card/工具集成.png"),
  },
  {
    key: 4,
    title: "CI/CD",
    description: "嵌入式DevOps实践",
    src: require("../assets/Card/CI_CD.png"),
  },
];

const App = () => {
  return (
    <div>
      <p style={{ fontSize: "30px", "textAlign": "center", "font-weight": 300, padding: 0, margin: "30px 0 5px 0" }}>软件定义汽车</p>
      <div class={style.titleIcon}></div>
      <p style={{ fontSize: "15px", "textAlign": "center" }}>汽车应用解决方案</p>
      <div className={style.productsCard}>
        {SoftwareDefinitionCar.map((item) => {
          return (
            <ProductCard key={item.key} src={item.src} title={item.title} description={item.description} />
          )
        })}
      </div>
    </div>

  )
}

export default App;