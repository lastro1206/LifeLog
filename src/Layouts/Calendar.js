import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const MyCalendar = styled(Calendar)`
  font-family: 'Open Sans', sans-serif;
  width: 50%;
  height: 100%;
  border: none;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  .react-calendar__tile--now {
    background: #FFE0B2;
    color: #000;
  }

  .react-calendar__tile--sat {
    color: blue;
  }

`;

function MyCalendarComponent() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
        <MyCalendar
            onChange={onChange}
            value={value}
        />
        </div>
    );
}

export default MyCalendarComponent;
