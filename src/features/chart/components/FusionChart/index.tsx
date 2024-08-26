import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

import {
  IS_COST_OF_GOODS_SOLD,
  IS_OPERATING_PROFITLOSS,
  IS_REVENUM,
  IS_SELLING_GENERAL_COST,
  MARKET_CAPITALS,
} from "../../constants/data";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const category: { label: string }[] = [];
const isRevenue: object[] = [];
const PRICE_UNIT = 1000000;

IS_REVENUM.forEach(({ date, value }) => {
  category.push({
    label: date,
  });

  isRevenue.push({
    value: value ? value / PRICE_UNIT : undefined,
    toolText: `$seriesName, ${date} ${
      value ? `, ${(value / PRICE_UNIT).toFixed(1)}` : ""
    } 
    `,
  });
});

const chartConfigs = {
  type: "stackedcolumn2dlinedy",
  width: "100%",
  height: 400,
  dataFormat: "json",
  dataSource: {
    categories: [
      {
        category,
      },
    ],
    chart: {
      exportEnabled: 1,
      caption: "매출액",
      //base
      baseFontColor: "#373737",
      //gb
      bgColor: "#ffffff",
      // yAxis: Y축 속성
      yAxisNameFontColor: "#7E8493",
      // caption
      captionFontColor: "#373737",
      // Data Label : x축 (카테고리)
      labelFontColor: "#373737",
      xAxisNameFontColor: "#373737",
      // Data Values
      valueFontColor: "#373737",
      // Div Lines and Grids : 수직 및 수평 가이드선과 격자 라인을 모두 포함하는 기능
      divLineColor: "#D9D9D9",
      // Canvas: 그래픽을 그릴 수 있는 빈 캔버스 영역
      canvasBorderColor: "#D9D9D9",
      // CrossLine
      crossLineColor: "#bbbbbb",
      // tooltip
      toolTipBorderColor: "#D9D9D9",
      toolTipBgColor: "#FFFFFF",
      // Legend
      legendItemFontColor: "#303030",
      //base
      baseFont: "Pretendard",
      baseFontSize: "11",
      outCnvBaseFontSize: "11",
      //차트 애니메이션
      animation: "0",

      // bg
      showBorder: "0",

      // yAxis: Y축 속성
      yAxisValuesPadding: "5",
      yAxisValueFontSize: "12",

      // caption: 차트상단 제목
      captionFont: "Pretendard",
      captionFontSize: "15",
      captionFontBold: "1",

      // Data Label : x축 이름 (카테고리)
      labelFont: "Pretendard",
      labelFontSize: "10",
      labelpadding: "5",

      // Data Values : ??
      valueFontSize: "11",

      // Div Lines and Grids : 수직 및 수평 가이드선과 격자 라인을 모두 포함하는 기능
      divLineAlpha: "100",
      divLineThickness: "1",
      // Vertical Div Lines : 차트의 가로 축에 수직으로 그려지는 가이드선. vLineOptions 커스텀함수 사용

      // Canvas : 그래픽을 그릴 수 있는 빈 캔버스 영역
      canvasBorderThickness: "1",
      showCanvasBorder: "1",
      canvasPadding: "0",

      // Anchors : 데이터 플롯 포인트 (라인 위에 도트)
      anchorBorderThickness: "1",
      anchorSides: "1",

      //CrossLine : 캔버스에 마우스 오버시 value값 뒤에 배경색
      crossLineAlpha: "70",

      // tooltip : 호버했을 때 나오는 정보
      toolTipWidth: "auto",
      toolTipBgAlpha: "90",

      // Legend : 데이터 시리즈 (series)
      legendItemFontSize: "12",
      alignLegendWithCanvas: "0",
      plotHighlightEffect: "fadeout",
      legendAllowDrag: "0",
      legendIconScale: "1",
      legendPadding: "5",

      // Margin
      chartLeftMargin: "5",
      chartTopMargin: "10",
      chartBottomMargin: "0",

      theme: "fusion",
      decimals: "1", // 숫자 값의 소수 자릿수를 지정
      forcedecimals: "1",
      lineThickness: "2",

      // 스크롤 비활성화
      scrollEnabled: "0",

      //chart 내부
      yAxisValueDecimals: "0", //y축 값: 소수점 이하 N 자리까지만
      sYAxisValueDecimals: "0", // 보조 y축(secondary y-axis) 값: 소수점 이하 N자리
      formatNumberScale: "0", // 숫자 척도를 서식화: 0은 서식화 하지 않음 (K, M 표기 하지 않음)
      plotSpacePercent: "40", // 플롯 공간(차트 영역 내의 플롯된 데이터가 표시되는 영역)의 비율
      drawCrossLine: "1", // 십자선(cross-line) : 1 = 그린다는 의미
      showPlotBorder: "0", // 플롯 영역의 경계선을 표시할지 여부 : 0 = 숨김
      anchorRadius: "2",
      chartRightMargin: "10",
      numVDivLines: category.length / 4 - 1,
      labelStep: 4,
    },
    dataset: [
      {
        seriesName: "매출액",
        renderAs: "line",
        color: "#BC95DF",
        anchorBorderColor: "#BC95DF",
        anchorBgColor: "#BC95DF",
        data: isRevenue,
      },
      {
        seriesName: "영업이익",
        renderAs: "stackedcolumn2d",
        color: "#F26F8E",
        anchorBorderColor: "#F26F8E",
        anchorBgColor: "#F26F8E",
        data: IS_OPERATING_PROFITLOSS.map(({ date, value }) => {
          return {
            value: value ? value / PRICE_UNIT : undefined,
            toolText: `$seriesName, ${date} ${
              value ? `, ${(value / PRICE_UNIT).toFixed(1)}` : ""
            }`,
          };
        }),
      },
      {
        seriesName: "판매관리비",
        renderAs: "stackedcolumn2d",
        color: "#749DF5",
        anchorBorderColor: "#749DF5",
        anchorBgColor: "#749DF5",
        data: IS_SELLING_GENERAL_COST.map(({ date, value }) => {
          return {
            value: value ? value / PRICE_UNIT : undefined,
            toolText: `$seriesName, ${date} ${
              value ? `, ${(value / PRICE_UNIT).toFixed(1)}` : ""
            }`,
          };
        }),
      },
      {
        seriesName: "매출원가",
        renderAs: "stackedcolumn2d",
        color: "#FFC533",
        anchorBorderColor: "#FFC533",
        anchorBgColor: "#FFC533",
        data: IS_COST_OF_GOODS_SOLD.map(({ date, value }) => {
          return {
            value: value ? value / PRICE_UNIT : undefined,
            toolText: `$seriesName, ${date} ${
              value ? `, ${(value / PRICE_UNIT).toFixed(1)}` : ""
            }`,
          };
        }),
      },
      {
        seriesName: "시가총액(우)",
        renderAs: "line",
        color: "#5F6377",
        anchorBorderColor: "#5F6377",
        anchorBgColor: "#5F6377",
        parentYAxis: "S",
        data: MARKET_CAPITALS.map(({ date, value }) => {
          return {
            value: value ? value / PRICE_UNIT : undefined,
            toolText: `$seriesName, ${date} ${
              value ? `, ${(value / PRICE_UNIT).toFixed(1)}` : ""
            }`,
          };
        }),
      },
    ],
    annotations: {
      groups: [
        {
          items: [
            {
              direction: "left",
              x: "20",
              y: "25",
              text: "(백만)",
              fontColor: "#0B0E10",
              fontSize: "10",
              type: "text",
            },
            {
              direction: "right",
              x: "$canvasEndX + 15",
              y: "25",
              text: "(백만)",
              fontColor: "#0B0E10",
              fontSize: "10",
              type: "text",
            },
          ],
        },
      ],
    },
  },
};

function FusionChart() {
  // @ts-expect-error react-fusionchart에서 타입 설정이 이상하게 되어 있음
  return <ReactFC {...chartConfigs} />;
}

export default FusionChart;
