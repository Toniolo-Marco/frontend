export function inttoString(n){
 var str = n.toString();
 var s="";
 if(str.length<4){
     return str;
 }
 for(let i = 0; i< str.length; i++){
    if(i%3===0 && i!==0){
        s+= "," + str.charAt(str.length-i-1);
    }
    else{
        s+= str.charAt(str.length-i-1);
    }
 }
 return s.split("").reverse().join("");
}

export function stringtoDate(str){
    var y = str.substring(0,4);
    var m = str.substring(5,7);
    var d = str.substring(8,10);
    return new Date(y,m,d);
}

export function stringtoShortDate(str){
    var y = str.substring(0,4);
    var m = str.substring(5,7);
    var d = str.substring(8,10);
    return (d+"/"+m+"/"+y);
}