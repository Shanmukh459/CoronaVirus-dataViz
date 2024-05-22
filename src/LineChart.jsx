import { line, max, scaleLinear, scaleTime, extent } from "d3"
import { YMarkerLine } from "./YMarkerLine"
import { XMarkerLine } from "./XMarkerLine"
import { XAxis } from "./XAxis"

const xValue = (d) => d.date
const yValue = (d) => d.totalDeaths

const margin = {
  top: 40,
  right: 40,
  bottom: 60,
  left: 110,
}

export const LineChart = ({ data, height, width }) => {
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xScale = scaleTime().domain(extent(data, xValue)).range([0, innerWidth])

  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)))

  const mostRecentDate = xScale.domain()[1]

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <YMarkerLine yScale={yScale} innerWidth={innerWidth} value={6000000} />
        <XMarkerLine
          xScale={xScale}
          innerHeight={innerHeight}
          value={mostRecentDate}
        />
        <XAxis xScale={xScale} innerHeight={innerHeight} />
        <path d={lineGenerator(data)} />
      </g>
    </svg>
  )
}
