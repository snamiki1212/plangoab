import React from "react";
import {MyCalendar} from './MyCalendar'
import {GeneratedCalendar} from './GeneratedCalendar'

export const FullCalendar = () => {
  return (
    <div>
      <MyCalendar />
      <GeneratedCalendar />
    </div>
  );
};
