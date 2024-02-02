import style from './index.css';

const App = () => {
  return (
    <div className={style.Header}>
      <h5>助力中国高端装备制造业的腾飞</h5>
      <div><img src={require('../assets/digi_10052.png')} alt="contact@digiproto.com" /><p>contact@digiproto.com</p></div>
      <div><img src={require('../assets/digi_10053.png')} alt="0575-88361699" /><p>0575-88361699</p></div>
      <div><img src={require('../assets/digi_10054.png')} alt="19957518153（销售）/ 13260299730（合作）/ 13501153049" /><p>19957518153（销售）/ 13260299730（合作）/ 13501153049</p></div>
    </div>
  )
}

export default App;