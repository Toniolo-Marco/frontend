import axios from "axios";
import { stringtoDate, stringtoShortDate } from "./string.manipulation";

export async function downloadData() {
  var ret = undefined;

  await axios
    .get("https://api.covid19api.com/dayone/country/italy/status/confirmed")
    .then((res) => {
      const arr = res.data;
      //const map = new Map();
      const xs = [];
      const ys = [];
      /*
        arr.forEach(e =>{
            map.set(stringtoShortDate(e.Date),e.Cases);
        });
        */

      //setting axes for chart
      arr.forEach((e) => {
        xs.push(stringtoShortDate(e.Date));
      });

      arr.forEach((e) => {
        ys.push(e.Cases);
      });

      ret = {
        xs,
        ys,
      };
    });
  console.log(ret);
  return ret;
}
