import style from './index.css';

const App = () => {
  return (
    <div className={style.AboutDigi}>
      <div className={style.DigiVideo}>
        <video style={{ width: "100%", "border-radius": "5px" }} poster={require("../assets/关于迪捷.png")} controls>
        </video>
      </div>
      <div className={style.DigiDescription}>
        <p style={{ fontSize: "30px", "font-weight": 300, margin: 0 }}>关于迪捷</p>
        <p style={{ margin: 0 }}>About us</p>
        <p style={{ margin: 5 }}>◀ 了解迪捷软件</p>
        <p>迪捷软件专注于安全关键领域数字化转型，遵循中立开放的商业理念，致力于核心工业软件国产化研究，为我国安全关键领域提供嵌入式DevOps、MBSE和数字装备产品及解决方案，以构建全生命周期的数字孪生系统。迪捷软件自主创新、自主设计、自主可控、自主知识产权的一系列嵌入式DevOps与MBSE仿真建模产品，涉及了高端装备的需求、设计、开发直至仿真测试等环节。
        </p>
        <div className={style.seeMore}>
          <p style={{ margin: "8px auto", "text-align": "center" }}>了解更多</p>
        </div>
      </div>
    </div>
  );
};

export default App;