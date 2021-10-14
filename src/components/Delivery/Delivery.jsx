import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
// import Button from 'material-ui/Button'


const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  return (
    <>
      <DatePicker
        autoOk
        variant="static"
        openTo="year"
        value={date}
        onChange={changeDate}
      />

      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
    </>
  );
};

export default StaticDatePicker;