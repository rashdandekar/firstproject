"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
// var mymessage:String;
// mymessage="Hello World!";
// console.log(mymessage);
var now = dayjs_1.default();
console.log(now.get('day'));
// let myDeclineCurve = new DeclineCurve();
// myDeclineCurve.curveType="Harmonic";
// myDeclineCurve.declineExponent=0.01;
// myDeclineCurve.declineRate=0.005;
// myDeclineCurve.initialRate=2500;
// myDeclineCurve.totalTime=500;
// myDeclineCurve.terminalRate=1200;
// myDeclineCurve.startDate=new Date("1-Jan-2021");
// //let a = myDeclineCurve.declinecurve;
// console.log(myDeclineCurve.startDate.toUTCString());
// console.log(myDeclineCurve.curveType);
// console.log(myDeclineCurve.declinecurve);