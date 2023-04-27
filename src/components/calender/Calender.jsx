import React, { useState } from "react";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import { Calendar as MyCalendar } from "primereact/calendar";

const Calender = ({ placeholder }) => {
  const [date, setDate] = useState(null);
  return (
    <div>
      <MyCalendar
        value={date}
        onChange={(e) => setDate(e.value)}
        showIcon
        placeholder={placeholder}
      />
    </div>
  );
};

export default Calender;
