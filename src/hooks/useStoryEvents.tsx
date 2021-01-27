import React from 'react'

export const useStoryEvents = () => {
  const [events, setEvents] = React.useState([])

  return [events];
}