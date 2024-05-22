import { line, max, scaleLinear, scaleTime, extent } from "d3"

const xValue = (d) => d.date
const yValue = (d) => d.totalDeaths
export const LineChart = ({ data, height, width }) => {
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, width])

  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([height, 0])

  const lineGenerator = line()
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
  return <svg width={width} height={height}>
    <path d={lineGenerator(data)} />
  </svg>
}