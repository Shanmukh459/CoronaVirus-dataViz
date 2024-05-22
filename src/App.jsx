import React from "react"
import { useData } from "./useData"
import { LineChart } from "./LineChart"

const width = window.innerWidth
const height = window.innerHeight

function App() {
  const data = useData()
  return data ? (
    <LineChart data={data} width={width} height={height} />
  ) : (
    <h1>Loading...</h1>
  )
}

export default App
