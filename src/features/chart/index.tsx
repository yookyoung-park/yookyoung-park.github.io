import FusionChart from "./components/FusionChart";
import HighChart from "./components/HighChart";
import D3 from "./components/D3";

import "./index.css";

function Chart() {
  return (
    <div className="container">
      <div className="section">
        <h2>퓨전차트</h2>
        <FusionChart />
      </div>
      <div className="section">
        <h2>하이차트</h2>
        <HighChart />
      </div>
      <div className="section">
        <h2>D3</h2>
        <D3 />
      </div>
    </div>
  );
}

export default Chart;
