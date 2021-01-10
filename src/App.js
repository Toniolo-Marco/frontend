import React, { useEffect, useState } from "react";
import Counter from "./components/counter";
import { inttoString } from "./utils/string.manipulation";
import styles from "./scss/global.module.scss";
import { downloadData } from "./utils/statistics";
import MyChart from "./components/chart";

function App() {
  const [number, setNumber] = useState(157_000);
  const [data, setData] = useState({ arrayCases: [], mapCases: new Map() });
  useEffect(() => setTimeout(() => setNumber(number + 1), 1000), [number]);
  useEffect(() => deathPerSecond(setData), []);
  return (
    <div className={styles.main}>
      <Counter init={number} />
      <MyChart data={data}></MyChart>
    </div>
  );
}

export default App;
