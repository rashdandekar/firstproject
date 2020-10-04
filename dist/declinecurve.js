"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclineCurve = void 0;
var DeclineCurve = /** @class */ (function () {
    function DeclineCurve() {
        this._declineExponent = 0;
        this._terminalRate = 0;
        this._startDate = new Date("1-Jan-1990");
        this._dateset = false;
        this._times = new Array;
        this._rates = new Array;
        this._declineCurve = new Array;
        this._curveType = "Exponential";
        this._initialRate = 100.0;
        this._declineRate = 0.5;
        this._totalTime = 1000;
        this._numberOfTimeSteps = 25;
    }
    Object.defineProperty(DeclineCurve.prototype, "curveType", {
        //Getters and Setters
        get: function () {
            return this._curveType;
        },
        set: function (v) {
            if (v == "Exponential" || v == "Hyperbolic" || v == "Harmonic") {
                this._curveType = v;
            }
            else {
                console.log("Error setting Decline Curve of type - '" + v + "'\nCurve type not found, resetting to Exponential");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeclineCurve.prototype, "initialRate", {
        get: function () {
            return this._initialRate;
        },
        set: function (v) {
            this._initialRate = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeclineCurve.prototype, "declineRate", {
        get: function () {
            return this._declineRate;
        },
        set: function (v) {
            this._declineRate = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeclineCurve.prototype, "declineExponent", {
        get: function () {
            return this._declineExponent;
        },
        set: function (v) {
            this._declineExponent = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeclineCurve.prototype, "terminalRate", {
        get: function () {
            return this._terminalRate;
        },
        set: function (v) {
            this._terminalRate = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeclineCurve.prototype, "totalTime", {
        get: function () {
            return this._totalTime;
        },
        set: function (v) {
            this._totalTime = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeclineCurve.prototype, "numberOfTimeSteps", {
        get: function () {
            return this._numberOfTimeSteps;
        },
        set: function (v) {
            this._numberOfTimeSteps = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeclineCurve.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (v) {
            this._dateset = true;
            this._startDate = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeclineCurve.prototype, "declinecurve", {
        get: function () {
            var curve = new Array;
            var i = 0;
            //console.log(this._totalTime)
            var delta_t = this._totalTime / (this._numberOfTimeSteps - 1);
            for (i; i < this._numberOfTimeSteps; i++) {
                this._times[i] = (i * delta_t);
                switch (this._curveType) {
                    case "Exponential":
                        this._rates[i] = this._initialRate * Math.exp(-this._declineRate * this._times[i]);
                        break;
                    case "Hyperbolic":
                        this._rates[i] = this._initialRate * Math.pow(1 + this._declineExponent * this._declineRate * this._times[i], -1.0 / this._declineExponent);
                        break;
                    case "Harmonic":
                        this._rates[i] = this._initialRate / (1 + this._declineRate * this._times[i]);
                        break;
                    default:
                        break;
                }
                if (this._rates[i] > this._terminalRate) {
                    if (this._dateset) {
                        curve[i] = [this._times[i], this._rates[i]];
                    }
                }
                else {
                    break;
                }
            }
            return curve;
        },
        enumerable: false,
        configurable: true
    });
    return DeclineCurve;
}()); //End of class
exports.DeclineCurve = DeclineCurve;
// var mydc=new DeclineCurve();
// console.log(mydc.curveType);
