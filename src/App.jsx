import React from "react"
import { useData } from "./useData"

const width = window.innerWidth
const height = window.innerHeight

console.log(height)

const LineChart = ({data, height, width}) => {
  return <svg width={width} height={height}></svg>
}

function App() {
  const data = useData()
  return data ? <LineChart data={data} width={width} height={height} /> : null
}

export default App
