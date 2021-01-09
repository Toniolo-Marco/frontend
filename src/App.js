import React, { useEffect, useState } from "react";
import Counter from "./components/counter";
import { inttoString } from "./utils/string.manipulation";
import styles from "./scss/global.module.scss"
import { deathPerSecond } from "./utils/statistics";
import MyChart from "./components/chart";

function App() {
  const [number, setNumber] = useState (157_000);
  useEffect(()=>setTimeout(()=>setNumber(number+1),1000),[number]);
  useEffect(()=>deathPerSecond(),[]);
  return (
    <div className={styles.main}>

      <Counter init={number} />
      <MyChart></MyChart>
    </div>
  );
}

export default App;
