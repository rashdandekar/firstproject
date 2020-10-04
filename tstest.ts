import { DeclineCurve } from "./declinecurve";
import { add } from "date-fns";
// var mymessage:String;
// mymessage="Hello World!";
// console.log(mymessage);

let date = new Date();
console.log(date);
date=add(date,{days:5});
console.log(date);


let myDeclineCurve = new DeclineCurve();

myDeclineCurve.curveType="Harmonic";
myDeclineCurve.declineExponent=0.01;
myDeclineCurve.declineRate=0.005;
myDeclineCurve.initialRate=2500;
myDeclineCurve.totalTime=500;
myDeclineCurve.terminalRate=1200;
myDeclineCurve.startDate=new Date("1-Jan-2021");
// //let a = myDeclineCurve.declinecurve;

// console.log(myDeclineCurve.startDate.toUTCString());
// console.log(myDeclineCurve.curveType);
// console.log(myDeclineCurve.declinecurve);