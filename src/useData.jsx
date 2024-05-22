import { csv, timeFormat, timeParse } from "d3"
import { useState, useEffect } from "react"

const csvUrl =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"

const parseDay = timeParse("%m/%d/%y")
const sum = (accumulator, currentValue) => accumulator + currentValue

const transform = (data) => {
  const days = data.columns.slice(4)
  return days.map((day) => {
    return {
      date: parseDay(day),
      totalDeaths: data.map((d) => +d[day]).reduce(sum, 0),
    }
  })
}

export const useData = () => {
  const [data, setData] = useState()

  useEffect(() => {
    csv(csvUrl).then((rawData) => setData(transform(rawData)))
  }, [])
  return data
}
