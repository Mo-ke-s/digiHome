import React from 'react';
import { Card } from 'antd';
import style from './index.css';

const { Meta } = Card;

const App = (props) => (
  <Card
    hoverable
    style={{
      "width": 400,
      "height": 160,
      overflow: 'hidden',
      display: 'flex',
      "flex-direction": 'row',
    }}
    cover={<img alt="example" src={props.src} className={style.cardStyle} />}
  >
    <Meta title={props.title} description={props.description} />
  </Card>
);
export default App;
