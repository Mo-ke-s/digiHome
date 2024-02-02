import React, { useState, useEffect } from 'react';
import style from './index.css';


const App = (props) => {

  const items = props.items;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(items.length / getColumnCount()));
    }, 5000); // 每5秒切换一次图片

    return () => clearInterval(timer); // 在组件卸载时清除定时器，停止轮播
  }, []);

  // 根据屏幕宽度获取每行显示的列数
  const getColumnCount = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 800) { // 当窗口宽度小于800px时，一行显示2个
      return 2;
    }
    if (windowWidth < 1200) { // 一行显示4个
      return 4;
    }
    return 6; // 默认情况下一行显示4个
  };

  // 计算当前应显示的图片索引范围
  const visibleItems = Array.from({ length: getColumnCount() }, (_, i) => currentIndex + i);

  return (
    <div className={style.AutoCarousel}>
      <p style={{ fontSize: "30px", textAlign: "center", fontWeight: 300, margin: 0, padding: "10px 0 5px 0" }}>{props.title}</p>
      <div className={style.titleIcon} />
      <div className={style.AutoCarouselImg}>
        {/* 只渲染可视区域内的图片 */}
        {visibleItems.map((index) => {
          if (index >= items.length) return null; // 避免超出数组长度
          return (
            <img key={index} src={items[index]} alt=""/>
          );
        })}
      </div>
    </div>
  );
};

export default App;