import style from './index.css';

const items = [
  {
    title: "产品与解决方案",
    subitems: [
      "SkyEye",
      "ModelCoder",
      "DigiThread",
      "嵌入式 DevOps 解决方案",
      "数字样机解决方案",
      "Open-SkyEye 开源社区"
    ]
  },
  {
    title: "媒体中心",
    subitems: [
      "新闻动态",
      "技术文章",
      "专题视频"
    ]
  },
  {
    title: "人才战略",
    subitems: [
      "社会招聘",
      "校园招聘",
      "实习招聘"
    ]
  },
  {
    title: "关于迪捷",
    subitems: [
      "公司简介",
      "资质荣誉",
      "合作伙伴",
      "联系我们"
    ]
  }
];

const App = () => {
  return (
    <div className={style.Foot}>
      <div className={style.FootBar}>
        {items.map((item) => <List key={item.title} title={item.title} subitems={item.subitems} />)}
        <div>
          <p style={{ color: "#dbdbdb", "font-size": "20px" }}>0575-88361699</p>
          <p style={{ color: "#dbdbdb", "font-size": "14px" }}>联系我们</p>
          <div className={style.ContactMethod} >
          <svg t="1706806335400" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7037" width="26" height="26"><path d="M683.058 364.695c11 0 22 1.016 32.943 1.976C686.564 230.064 538.896 128 370.681 128c-188.104 0.66-342.237 127.793-342.237 289.226 0 93.068 51.379 169.827 136.725 229.256L130.72 748.43l119.796-59.368c42.918 8.395 77.37 16.79 119.742 16.79 11 0 21.46-0.48 31.914-1.442a259.168 259.168 0 0 1-10.455-71.358c0.485-148.002 128.744-268.297 291.403-268.297l-0.06-0.06z m-184.113-91.992c25.99 0 42.913 16.79 42.913 42.575 0 25.188-16.923 42.579-42.913 42.579-25.45 0-51.38-16.85-51.38-42.58 0-25.784 25.93-42.574 51.38-42.574z m-239.544 85.154c-25.384 0-51.374-16.85-51.374-42.58 0-25.784 25.99-42.574 51.374-42.574 25.45 0 42.918 16.79 42.918 42.575 0 25.188-16.924 42.579-42.918 42.579z m736.155 271.655c0-135.647-136.725-246.527-290.983-246.527-162.655 0-290.918 110.88-290.918 246.527 0 136.128 128.263 246.587 290.918 246.587 33.972 0 68.423-8.395 102.818-16.85l93.809 50.973-25.93-84.677c68.907-51.93 120.286-119.815 120.286-196.033z m-385.275-42.58c-16.923 0-34.452-16.79-34.452-34.179 0-16.79 17.529-34.18 34.452-34.18 25.99 0 42.918 16.85 42.918 34.18 0 17.39-16.928 34.18-42.918 34.18z m188.165 0c-16.984 0-33.972-16.79-33.972-34.179 0-16.79 16.927-34.18 33.972-34.18 25.93 0 42.913 16.85 42.913 34.18 0 17.39-16.983 34.18-42.913 34.18z" fill="#09BB07" p-id="7038"></path></svg>
          <svg t="1706807293221" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4813" width="26" height="26"><path d="M382.48 698.688c-8.66 0.277-16.34 7.787-17.514 16.939-1.088 9.088 4.821 16.384 13.546 16.256 8.875-0.15 16.896-7.872 18.027-17.174 0.917-9.28-5.397-16.512-14.059-16.021z m-58.944 10.41c-26.666 1.26-50.816 24.513-54.293 52.566-3.627 28.224 15.168 50.859 42.027 50.39 27.242-0.427 52.352-24.3 55.68-53.1 2.986-28.863-16.363-50.986-43.414-49.855z" fill="#FFFFFF" p-id="4814"></path><path d="M766.46 673.685c-12.204-127.594-183.852-215.53-383.404-196.437-199.552 19.093-351.424 137.984-339.22 265.6C56.058 870.443 227.706 958.4 427.258 939.307c199.552-19.115 351.424-138.006 339.2-265.622z m-251.137 49.451c-9.067 83.03-89.237 151.339-175.85 150.976-83.606-0.32-139.563-64.981-127.809-142.997 11.542-76.523 84.48-140.886 165.718-145.238 84.053-4.693 147.008 55.979 137.941 137.259z" fill="#FFFFFF" p-id="4815"></path><path d="M1022.096 313.877C988.411 125.653 838.758 50.091 735.056 42.88c-19.498-1.877-37.61 9.877-40.298 28.715-2.582 18.325 10.538 36.565 28.714 40.298 67.84 14.976 196.203 34.731 230.166 225.75 2.965 19.37 18.922 40.021 43.05 34.773 17.664-3.904 33.451-13.717 25.408-58.539zM720.38 261.291a24.363 24.363 0 0 0-27.499 17.45c-3.946 13.142 3.328 28.182 16.683 30.976 28.373 5.931 42.261 25.494 46.379 46.358 0 0 3.626 14.144 17.258 18.048 13.334 3.818 37.42-6.038 30.486-32.299-6.89-35.733-42.41-74.112-83.307-80.533z" fill="#E79014" p-id="4816"></path><path d="M737.638 160.427c-29.782-5.142-43.414 16.213-43.414 33.258 0 17.024 12.16 29.312 34.603 35.563 59.605 16.533 97.877 42.667 108.373 111.68 3.051 20.032 21.355 30.72 34.646 30.72 17.941 0 32.47-14.55 32.47-32.47 0-0.66-0.065-1.322-0.108-1.962l0.171-0.043c-11.35-88.533-77.696-161.365-166.741-176.746z" fill="#E79014" p-id="4817"></path><path d="M731.6 697.472c-11.968 124.053-188.842 223.381-380.65 218.496-177.75-4.395-296.192-97.984-276.566-206.57C93.52 603.924 238.8 512.767 409.68 502.677c183.552-10.817 333.59 74.58 321.92 194.794z m-27.968-198.805c-7.082 0.192-10.069 1.024-11.136-1.515-0.874-2.07 0.171-4.33 3.99-13.973 10.645-26.859 27.562-82.07-7.232-112.875-22.955-20.33-120.15-35.84-222.57 35.2-5.1 3.541-13.377 11.093-17.558 9.707-4.608-1.558-5.59-6.528-6.208-15.915-3.35-50.603 39.21-191.232-70.57-179.563-116.694 19.755-274.134 204.16-319.126 293.355-159.68 316.459 71.232 445.397 297.11 452.139 245.055 7.232 493.311-131.904 525.951-318.038 21.781-124.245-124.48-149.589-172.65-148.522z" fill="#D62629" p-id="4818"></path><path d="M377.382 585.877c-81.238 4.374-154.176 68.715-165.718 145.238-11.733 78.016 44.203 142.677 127.808 142.997 86.614 0.363 166.784-67.947 175.851-150.976 9.067-81.28-53.888-141.952-137.941-137.259zM366.95 758.955c-3.328 28.8-28.438 52.65-55.68 53.098-26.88 0.47-45.675-22.165-42.027-50.389 3.477-28.053 27.627-51.307 54.293-52.565 27.051-1.131 46.4 20.992 43.414 49.856z m11.562-27.094c-8.704 0.128-14.613-7.168-13.546-16.256 1.173-9.13 8.853-16.661 17.514-16.938 8.64-0.491 14.976 6.741 14.06 16-1.132 9.322-9.153 17.045-18.028 17.194z" fill="#030000" p-id="4819"></path></svg>
          <svg t="1706807322641" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2287" width="26" height="26"><path d="M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7z m247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-0.1-8.1c0-0.6-0.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-0.7c-0.8 0-19.6-0.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-0.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 0.6-0.3 1.3-0.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c0.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-0.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c0.8-1.9 19-46.3 5.1-95.9l-0.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z" fill="#1296DB" p-id="2288"></path></svg>
          <svg t="1706807512422" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22022" width="26" height="26"><path d="M1022.08 716.928V300.48l-217.28 217.344 217.28 199.04M655.36 667.2a188.16 188.16 0 0 1-133.888 55.488c-50.56 0-98.176-19.712-133.952-55.488L270.976 550.592 20.864 779.84v38.4c0 50.24 40.832 91.072 91.008 91.072h819.2c50.176 0 91.008-40.832 91.008-91.008v-39.68l-249.536-228.608-117.12 117.12" fill="#d81e06" p-id="22023"></path><path d="M932.928 128h-819.2C63.616 128 22.848 168.832 22.848 219.008v19.008l398.784 398.912c27.2 27.136 63.36 42.112 101.76 42.112 38.464 0 74.624-14.976 101.76-42.112L1024 238.016v-19.008C1024 168.832 983.04 128 932.928 128M20.864 300.48v417.6L238.72 518.4 20.864 300.48" fill="#d81e06" p-id="22024"></path></svg>
          </div>
        </div>
      </div>
      <div className={style.Footer}>
        <p>版权所有 © 北京迪捷数原科技有限公司</p>
        <p>京ICP备17058215号</p>
        Powered by <strong>MetInfo</strong> 7.3.0 ©2008-2024  mituo.cn
      </div>
    </div>
  )

};

const List = (props) => {
  return (
    <div>
      <p style={{ color: "#a6a6a6" }}>{props.title}</p>
      <div>
        {props.subitems.map((item) => <p key={item} style={{ color: "#dbdbdb", "font-size": "14px" }}>{item}</p>)}
      </div>
    </div>
  )
}

export default App;