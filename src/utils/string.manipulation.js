export function inttoString(n) {
  var str = n.toString();
  var s = "";
  if (str.length < 4) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      s += "," + str.charAt(str.length - i - 1);
    } else {
      s += str.charAt(str.length - i - 1);
    }
  }
  return s.split("").reverse().join("");
}

export function stringtoDate(str) {
  var y = str.substring(0, 4);
  var m = str.substring(5, 7);
  var d = str.substring(8, 10);
  return new Date(y, m, d);
}

export function datetoShortDate(date) {
  var d = date.getDate();
  var m = monthtoString(date.getMonth());
  var y = date.getFullYear();
  return d + " " + m + " " + y;
}

export function monthtoString(d) {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return month[d];
}
