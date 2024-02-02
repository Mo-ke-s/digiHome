import AutoCarousel from './AutoCarousel.jsx'

const items = [
  require('../assets/TypicalCustomers/1665369656_2.png'),
  require('../assets/TypicalCustomers/1622520767.png'),
  require('../assets/TypicalCustomers/1622521107.png'),
  require('../assets/TypicalCustomers/1622521223.png'),
  require('../assets/TypicalCustomers/1622521428.png'),
  require('../assets/TypicalCustomers/1665369505_2.png'),
  require('../assets/TypicalCustomers/1622520963.png'),
  require('../assets/TypicalCustomers/1622520764_2.png'),
  require('../assets/TypicalCustomers/1622520835.png'),
  require('../assets/TypicalCustomers/1622520855.png'),
  require('../assets/TypicalCustomers/1622520953_2.png'),
  require('../assets/TypicalCustomers/1622521126.png'),
  require('../assets/TypicalCustomers/1622520479_2.png'),
  require('../assets/TypicalCustomers/1622520552_2.png'),
  require('../assets/TypicalCustomers/1665369050_2.png'),
  require('../assets/TypicalCustomers/1665369401_2.png'),
];
const App = () => {
  return <AutoCarousel items={items} title="典型客户" />
}

export default App;


