import style from './index.css';
import Header from './Header.jsx';
import digiLgo from '../assets/digiLgo.png';
import TopNav from './TopNav.jsx';
import Carousel from './Carousel.jsx';
import ProductsCase from './ProductsCase.jsx';
import SoftwareDefinitionCar from './SoftwareDefinitionCar.jsx';
import AboutDigi from './AboutDigi.jsx';
import LatestNews from './LatestNews.jsx';

import Partners from './Partners.jsx';
import TypicalCustomers from './TypicalCustomers.jsx';

import Foot from './Foot.jsx';

import { FloatButton } from 'antd';

export default function Layout() {
  return (
    <div className={style.global}>
      <Header />
      <img src={digiLgo} alt="digiLgo" className={style.digiLgo} />
      <TopNav />
      <Carousel />
      <ProductsCase />
      <SoftwareDefinitionCar />
      <AboutDigi />
      <LatestNews />
      <div style={{
        "background-color": "#f7f7f7", "border-radius": "20px"
      }}>
        <TypicalCustomers />
        <Partners />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p>友情链接 :</p>
        <pre> / </pre>
        <pre>中国Linux内核开发者大会</pre>
      </div>

      <Foot />
      <div
        style={{
          padding: 10,
        }}
      >
        <FloatButton.BackTop />
      </div>
    </div>
  );
}
