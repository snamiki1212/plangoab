import React from 'react'
import { Chart } from 'react-google-charts'

// REF: https://developers.google.com/chart/interactive/docs/gallery/ganttchart#data-format
const GC_DATA_FORMAT = [
  { type: 'string', label: 'Task ID' },
  { type: 'string', label: 'Task Name' },
  { type: 'string', label: 'Resource' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'Percent Complete' },
  { type: 'string', label: 'Dependencies' },
] as const

type GC_DATA_TYPE = [
  string | null,
  string | null,
  string | null,
  Date,
  Date,
  number | null,
  number | null,
  string | null
]

export const HomePage = () => {
  const data1: GC_DATA_TYPE = [
    '[VISA]Study-1',
    '[VISA]Study Visa',
    '',
    new Date(2020, 10, 20),
    new Date(2021, 11, 31),
    null,
    100,
    null,
  ]

  const data2: GC_DATA_TYPE = [
    '[VISA]COOP-1',
    '[VISA]CO-OP VISA',
    '',
    new Date(2021, 11, 31),
    new Date(2022, 11, 31),
    0,
    100,
    data1[0],
  ]

  const data3: GC_DATA_TYPE = [
    '[VISA]Working Foliday VISA-1',
    '[VISA]Working Foliday VISA-1',
    '',
    new Date(2022, 11, 31),
    new Date(2023, 6, 31),
    0,
    100,
    data2[0],
  ]

  const dataList = [data1, data2, data3]
  const dataSet = [GC_DATA_FORMAT, ...dataList]

  return (
    <div>
      <Chart
        width="100%"
        height="200%"
        chartType="Gantt"
        loader={<div>Loading Chart</div>}
        options={{}}
        data={dataSet}
      />
    </div>
  )
}
