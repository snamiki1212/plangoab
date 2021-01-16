import React from 'react'

import FullCalendar from '@fullcalendar/react'
// TODO: remove
// import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

import '@fullcalendar/common/main.css'
// import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/resource-timeline/main'

export default function Fullcalendar() {
  return (
    <FullCalendar
      plugins={[resourceTimelinePlugin]}
      initialView="resourceTimelineWeek"
      initialEvents={[
        {
          title: 'initial event',
          start: new Date(2021, 0, 10),
        },
      ]}
      schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
    />
  )
}
