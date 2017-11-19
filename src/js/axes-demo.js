import * as d3 from 'd3';

//Width and height。设置margin来是的实际作图区域与SVG有空间
const margin = { top: 20, right: 50, bottom: 20, left: 30 };
const width = 500 - margin.left - margin.right;
const height = 200 - margin.top - margin.bottom;


let dataset = [
  [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
  [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
  [600, 150], [0, 0]
];

// Create scale functions
let xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, d => d[0])])
  .range([0, width])
  .nice();

let yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, d => d[1])]) // 输入
  .range([height, 0])    // 输出
  .nice();   // 四舍五入

let rScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, d => d[1])])
  .rangeRound([2, 5]); // 代替range,但输出是四舍五入的整数


let xAxis = d3.axisBottom(xScale)
  .ticks(5);

let yAxis = d3.axisLeft(yScale)
  .ticks(6);

// Create SVG element
const svg = d3.select("#app")
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)

// 生成圆点
svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d[0]))
  .attr('cy', d => yScale(d[1]))
  .attr('r', d => rScale(d[1]))
  .on('click', d => console.log(d));

// 添加x坐标轴  
svg.append('g')
  .attr("transform", `translate(${0}, ${height})`)
  .call(xAxis);

// 添加y坐标轴  
svg.append('g')
  .attr("transform", `translate(${0}, ${0})`)
  .call(yAxis)  




