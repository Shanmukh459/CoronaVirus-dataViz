export const YMarkerLine = ({ innerWidth, yScale, value }) => {
  const markerLineY = yScale(value)
  const markerLineX1 = 0
  const markerLineX2 = innerWidth
  return (
    <>
      <line
        x1={markerLineX1}
        x2={markerLineX2}
        y1={markerLineY}
        y2={markerLineY}
      />
      <text
        x={markerLineX1 - 5}
        y={markerLineY}
        textAnchor="end"
        alignmentBaseline="middle"
      >
        6,000,000
      </text>
    </>
  )
}
