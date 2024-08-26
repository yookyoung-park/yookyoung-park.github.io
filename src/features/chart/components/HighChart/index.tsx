import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exportingModule from "highcharts/modules/exporting";

import {
  IS_COST_OF_GOODS_SOLD,
  IS_OPERATING_PROFITLOSS,
  IS_REVENUM,
  IS_SELLING_GENERAL_COST,
  MARKET_CAPITALS,
} from "../../constants/data";

exportingModule(Highcharts);

const categories: string[] = [];
const isRevenue: (number | undefined)[] = [];
const PRICE_UNIT = 1000000;

IS_REVENUM.forEach(({ date, value }) => {
  categories.push(date);

  isRevenue.push(value ? value / PRICE_UNIT : undefined);
});

const options = {
  chart: {
    type: "column",
    width: null,
    height: 400,
  },
  title: {
    text: "매출액",
    style: {
      color: "#373737",
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
  xAxis: {
    categories, // Assuming 'category' is an array of objects with a 'label' property
    labels: {
      style: {
        color: "#373737",
        fontSize: "10px",
      },
    },
    crosshair: true,
  },
  yAxis: [
    {
      reversedStacks: false,
      title: {
        text: "(백만)",
        align: "high",
        offset: 0,
        rotation: 0,
        y: -10,
        style: {
          color: "#7E8493",
          fontSize: "12px",
        },
      },
      labels: {
        style: {
          color: "#373737",
          fontSize: "11px",
        },
        format: "{value:,.0f}", // Formatting for values without decimals
      },
      gridLineColor: "#D9D9D9",
    },
    {
      title: {
        text: "(백만)",
        align: "high",
        offset: 0,
        rotation: 0,
        y: -10,
        style: {
          color: "#7E8493",
          fontSize: "12px",
        },
      },
      labels: {
        style: {
          color: "#373737",
          fontSize: "11px",
        },
        format: "{value:,.0f}", // Formatting for values without decimals
      },
      opposite: true,
      gridLineColor: "#D9D9D9",
    },
  ],
  tooltip: {
    shared: true,
    borderColor: "#D9D9D9",
    backgroundColor: "#FFFFFF",
    style: {
      color: "#373737",
      fontSize: "11px",
    },
  },
  legend: {
    itemStyle: {
      color: "#303030",
      fontSize: "12px",
    },
    align: "center",
    verticalAlign: "bottom",
    layout: "horizontal",
  },
  plotOptions: {
    column: {
      stacking: "normal",
      borderColor: "transparent",
    },
    line: {
      lineWidth: 2,
      marker: {
        radius: 2,
        lineWidth: 1,
        symbol: "circle",
      },
    },
  },
  series: [
    {
      name: "매출액",
      type: "spline",
      color: "#BC95DF",
      data: isRevenue, // Assuming isRevenue is an array of values
    },
    {
      name: "영업이익",
      type: "column",
      color: "#F26F8E",
      data: IS_OPERATING_PROFITLOSS.map(({ value }) =>
        value ? value / PRICE_UNIT : null
      ),
      tooltip: {
        pointFormat: "{series.name}: {point.y:,.1f}<br/>",
      },
    },
    {
      name: "판매관리비",
      type: "column",
      color: "#749DF5",
      data: IS_SELLING_GENERAL_COST.map(({ value }) =>
        value ? value / PRICE_UNIT : null
      ),
      tooltip: {
        pointFormat: "{series.name}: {point.y:,.1f}<br/>",
      },
    },
    {
      name: "매출원가",
      type: "column",
      color: "#FFC533",
      data: IS_COST_OF_GOODS_SOLD.map(({ value }) =>
        value ? value / PRICE_UNIT : null
      ),
      tooltip: {
        pointFormat: "{series.name}: {point.y:,.1f}<br/>",
      },
    },
    {
      name: "시가총액(우)",
      type: "spline",
      color: "#5F6377",
      yAxis: 1,
      data: MARKET_CAPITALS.map(({ value }) =>
        value ? value / PRICE_UNIT : null
      ),
      tooltip: {
        pointFormat: "{series.name}: {point.y:,.1f}<br/>",
      },
    },
  ],
  annotations: [
    {
      labels: [
        {
          point: {
            x: 0, // Example: adjust to your first category index
            y: 0, // Example: adjust to an appropriate y value
            xAxis: 0,
            yAxis: 0,
          },
          text: "(백만)",
          style: {
            color: "#0B0E10",
            fontSize: "10px",
          },
        },
        {
          point: {
            x: categories.length - 1, // Example: adjust to your last category index
            y: 0, // Example: adjust to an appropriate y value
            xAxis: 0,
            yAxis: 0,
          },
          text: "(백만)",
          style: {
            color: "#0B0E10",
            fontSize: "10px",
          },
        },
      ],
    },
  ],
};

function HighChart() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default HighChart;
