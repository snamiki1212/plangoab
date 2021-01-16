import React from 'react'
import { Chart } from 'react-google-charts'

const GC_DATA_FORMAT = [
  { type: 'string', label: 'Task ID' },
  { type: 'string', label: 'Task Name' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'Percent Complete' },
  { type: 'string', label: 'Dependencies' },
] as const
type GC_DATA_TYPE = [
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
    'Research',
    'Find sources',
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null,
  ]

  const data2: GC_DATA_TYPE = [
    'Write',
    'Write paper',
    null,
    new Date(2015, 0, 9),
    3 * 24 * 60 * 60 * 1000,
    25,
    'Research,Outline',
  ]

  const data3: GC_DATA_TYPE = [
    'Cite',
    'Create bibliography',
    null,
    new Date(2015, 0, 7),
    1 * 24 * 60 * 60 * 1000,
    20,
    'Research',
  ]

  const data4: GC_DATA_TYPE = [
    'Complete',
    'Hand in paper',
    null,
    new Date(2015, 0, 10),
    1 * 24 * 60 * 60 * 1000,
    0,
    'Cite,Write',
  ]
  const data5: GC_DATA_TYPE = [
    'Outline',
    'Outline paper',
    null,
    new Date(2015, 0, 6),
    1 * 24 * 60 * 60 * 1000,
    100,
    'Research',
  ]

  const dataList = [data1, data2, data3, data4, data5]
  const dataSet = [GC_DATA_FORMAT, ...dataList]

  return (
    <div>
      <Chart
        width={'90%'}
        height={'400px'}
        chartType="Gantt"
        loader={<div>Loading Chart</div>}
        options={{}}
        data={dataSet}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}
