var greed="Good Morning";
console.log("Given string is:",greed);
greedcount=greed.length;
console.log("Total number of count:",greedcount);
 numcount=greed.charAt(2);
console.log("3rd number character",numcount);
console.log("============lastchar===============");
 lastchar=greed.charAt(greed.length-1)
 console.log("Last char is :",lastchar);
 upercasechar=greed.toUpperCase();
 console.log("upercase char is :",upercasechar);
 lowercasechar=greed.toLowerCase();
 console.log("lowercase char:",lowercasechar);
 console.log("===============concat method=====================");
 var firstNmae="Prem";
 var lastname=" Rathod";
 concatString=firstNmae+lastname;
 console.log("using + opretor concated String",concatString);
 concatmethod=firstNmae.concat(lastname)
 console.log("using method concat:",concatmethod);

 indexchar=greed.indexOf('M');
 console.log("index count of char:",indexchar);
  var replacechar=greed.replace("Morning","Afternoon");
  console.log("relace of morning to afternoon:",replacechar);
  console.log("============trim()=====================");
  var Day="       Friday       ";
   beforlenth=Day.length;
   console.log("before trim is;",beforlenth);
 aftertrim= Day.trim();
 console.log("after trim:",aftertrim);
 var trimlentgh=aftertrim.length;
 console.log("after trim:",trimlentgh);
