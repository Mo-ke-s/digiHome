import AutoCarousel from './AutoCarousel.jsx'

const items = [
  require("../assets/Partners/1701745062_2.png"),
  require("../assets/Partners/1701744741_2.png"),
  require("../assets/Partners/1701744802_2.png"),
  require("../assets/Partners/1701745034_2.png"),
  require("../assets/Partners/1701745364_2.png"),
  require("../assets/Partners/1701745385_2.png"),
  require("../assets/Partners/1701744959_2.png"),
  require("../assets/Partners/1701745172.png"),
  require("../assets/Partners/1701745301.png"),
  require("../assets/Partners/1701745528_2.png"),
  require("../assets/Partners/1701745414.png"),
];
const App = () => {
  return <AutoCarousel items={items} title="合作伙伴" />
}

export default App;