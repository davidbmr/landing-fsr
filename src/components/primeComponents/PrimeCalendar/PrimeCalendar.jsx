import React from "react";
import style from "./PrimeCalendar.module.css";
import { Calendar } from "primereact/calendar";
import { InputLabel } from "@mui/material";

const PrimeCalendar = ( { value, onChange, textLabel = "", width = "100%", addText = false, name = ""} ) => {

  return (
    <div className={style.column__item} style={{ width }}>
      { addText && <InputLabel> { textLabel } </InputLabel> }
      <Calendar value={value} onChange={onChange} showIcon locale="es" name={name}/>
    </div>
  );
};

export default PrimeCalendar;
