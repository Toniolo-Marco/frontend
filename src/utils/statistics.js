import axios from "axios";
import { stringtoDate, stringtoShortDate } from "./string.manipulation";

export function deathPerSecond(setData){
    axios.get("https://api.covid19api.com/dayone/country/italy/status/confirmed")
    .then(res=>{
        const arr = res.data;
        const mapCases = new Map();
        //converting date:

        const arrayCases = arr.map(e => e.Cases);

        arr.forEach(function(e){
            this.set(stringtoShortDate(e.Date),e.Cases);
        },mapCases);

        setData({arrayCases, mapCases});
    });
}