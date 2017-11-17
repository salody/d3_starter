# 数据可视化

## D3

### D3中的scales

  定义：Scales are functions that map from an input domain to an output range.

  The values in any dataset are unlikely to correspond exactly to pixel measurements for use in your visualization. Scales provide a convenient way to map those data values to new values useful for visualization purposes.

#### Margin Convention

  在SVG上作图时，有时候不能顶边。不然像0，0位置的圆形只有一半。
  可以使用margin补偿方法来做处理，具体代码如下

  ```javascript
  let margin = {top: 20, right: 10, bottom: 20, left: 10};
  let width = 960 - margin.left - margin.right;
  let height = 500 - margin.top - margin.bottom;

  const svg = d3.select("#app")
    .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  /* With this convention, all subsequent code can ignore margins. For example, to create x and y scales, simply say: */

  let x = d3.scale.linear()
    .range([0, width]);

  let y = d3.scale.linear()
    .range([height, 0]);
  ```