import React, { useRef } from 'react';
import style from './index.css';
import { Carousel } from 'antd';

const items = [
  {
    title: "Carousel1",
    description: "软件定义汽车",
    detail: "推动汽车软件开发创新进程，走在技术最前沿",
    linkText: "了解更多",
    key: 0,
  },
  {
    title: "Carousel2",
    description: "国产工业软件的机遇和挑战",
    detail: "国产自主可控，新旧动能转换下的创新产业",
    linkText: "了解更多",
    key: 1,
  },
  {
    title: "Carousel3",
    description: "嵌入式DevOps解决方案",
    detail: "嵌入式DevOps解决方案",
    linkText: "了解更多",
    key: 2,
  },
  {
    title: "Carousel4",
    description: "数字样机解决方案",
    detail: "技术革新引路，造就智能未来",
    linkText: "了解更多",
    key: 3,
  },
];

const carouselStyle = items.map((item) => (`carouselImg${item.key}`));// 引入背景图片类名

const settings = {
  dots: true,
  autoplay: true,
  fade: true,
  cssEase: "ease",
};



const App = () => {
  const carouselRef = useRef();/* 使用ref，以获取实例 */

  return (
    <div>
      <div className={style.ArrowButton}>
        <button className={style.Button} onClick={() => carouselRef.current?.prev()}>
          <svg t="1706816944503" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1167" width="48" height="48"><path d="M0 0h1024v1024H0z" fill="#ffffff" fill-opacity="0" p-id="1168"></path><path d="M252.802 512L571 193.802l67.882 67.882L388.566 512l250.316 250.316L571 830.198z" fill="#ffffff" p-id="1169"></path></svg>
        </button>
        <button className={style.Button} onClick={() => carouselRef.current?.next()}>
          <svg t="1706816876479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="910" width="48" height="48"><path d="M770.198 512L452 830.198l-67.882-67.882L634.434 512 384.118 261.684 452 193.802z" fill="#ffffff" p-id="911"></path></svg>
        </button>
      </div>
      <Carousel ref={carouselRef} {...settings}>
        {items.map((item) => {
          return (
            <div key={item.key} className={style[carouselStyle[item.key]] + " " + style.carousel}>
              <h4 className={style.description + " " + style.AnimateBackInDown}>{item.description}</h4>
              <p className={style.detail}>{item.detail}</p>
              <button className={style.linkText}>{item.linkText}</button>
            </div>
          )
        })}
      </Carousel >

    </div>
  )
};

export default App;

