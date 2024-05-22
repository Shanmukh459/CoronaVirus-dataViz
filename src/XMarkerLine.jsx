export const XMarkerLine = ({ xScale, innerHeight, value }) => {
  const markerLineX = xScale(value)
  const markerLineY1 = innerHeight
  const markerLineY2 = 0
  return (
    <>
      <line
        x1={markerLineX}
        x2={markerLineX}
        y1={markerLineY1}
        y2={markerLineY2}
      />
      <text
        x={xScale(value)}
        y={innerHeight + 5}
        textAnchor="middle"
        alignmentBaseline="hanging"
      >
        now
      </text>
    </>
  )
}
