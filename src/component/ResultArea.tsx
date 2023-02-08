import React, { FC } from "react";

interface ResultValue {
  value: string;
}
function ResultArea(props: ResultValue) {
  return <h3> {props.value}</h3>;
}

export default ResultArea;
