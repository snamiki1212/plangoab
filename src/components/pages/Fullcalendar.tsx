import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'

export function Fullcalendar() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
}
