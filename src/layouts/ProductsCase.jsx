import style from './index.css';
import ProductCard from './ProductCard.jsx';

const ProductsCase = [
  {
    key: 0,
    src: require("../assets/Card/SkyEyeLogo.png"),
    title: "SkyEye",
    description:
      "SkyEye，中文全称天目全数字实时仿真软件，是基于可视化建模的硬件行为仿真平台，能够对复杂系统的行为进行实时、精确的仿真。",
  },
  {
    key: 1,
    src: require("../assets/Card/ModelCoderLogo.png"),
    title: "ModelCoder",
    description:
      "ModelCoder作为一款建模仿真与代码生成软件，支持基于模型的嵌入式系统设计与开发，能够帮助工程师快速、高效地构建嵌入式系统。",
  },
  {
    key: 2,
    src: require("../assets/Card/DigiThreadLogo.png"),
    title: "DigiThread",
    description:
      "DigiThread是一款为多学科、多领域中不同的仿真模型进行协同仿真的一体化平台，能够帮助工程师打破学科壁垒，实现多学科协同仿真。",
  },
];

const App = () => {
  return (
    <div>
      <p style={{ fontSize: "30px", "textAlign": "center", "font-weight": 300, padding: 0, margin: "30px 0 5px 0" }}>产品阵容</p>
      <div class={style.titleIcon}></div>
      <p style={{ fontSize: "15px", "textAlign": "center" }}>通过数字孪生、嵌入式DevOps和虚拟化技术迎接新工业时代</p>
      <div className={style.productsCard}>
        {ProductsCase.map((item) => {
          return (
            <ProductCard key={item.key} src={item.src} title={item.title} description={item.description}/>
          )
        })}
      </div>
    </div>

  )
}

export default App;