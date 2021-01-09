import React, { useEffect, useState } from "react";
import { inttoString } from "../utils/string.manipulation";
export default function Counter(props) {
  return (
    <>
      <div>{inttoString(props.init)}</div>
    </>
  );
}
