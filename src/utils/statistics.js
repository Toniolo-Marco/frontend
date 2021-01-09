import axios from "axios";
import { stringtoDate, stringtoShortDate } from "./string.manipulation";

export function deathPerSecond(){
    axios.get("https://api.covid19api.com/dayone/country/italy/status/confirmed")
    .then(res=>{
        const arr = res.data;
        const map = new Map();
        //converting date:

        arr.forEach(e =>{
            map.set(stringtoShortDate(e.Date),e.Cases);
        });
        console.log(map);
    });
}