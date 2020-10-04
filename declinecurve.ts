import { add } from "date-fns";

class DeclineCurve {
    private _curveType: string;
    private _initialRate: number;
    private _declineRate: number;
    private _declineExponent: number = 0;
    private _terminalRate: number = 0;
    private _totalTime: number;
    private _numberOfTimeSteps: number;
    private _startDate  = new Date("1-Jan-1990");
    private _dateset: boolean = false;
    private _times: number[] = new Array;
    private _rates: number[] = new Array;
    private _declineCurve: number[] = new Array;

    constructor() {
        this._curveType = "Exponential";
        this._initialRate = 100.0;
        this._declineRate = 0.5;
        this._totalTime = 1000;
        this._numberOfTimeSteps = 25;
    }

    //Getters and Setters
    public get curveType(): string {
        return this._curveType;
    }
    public set curveType(v: string) {
        if (v == "Exponential" || v == "Hyperbolic" || v == "Harmonic") {
            this._curveType = v;
        }
        else {
            console.log(`Error setting Decline Curve of type - '${v}'\nCurve type not found, resetting to Exponential`);
        }
    }
    public get initialRate(): number {
        return this._initialRate;
    }
    public set initialRate(v: number) {
        this._initialRate = v;
    }
    public get declineRate(): number {
        return this._declineRate;
    }
    public set declineRate(v: number) {
        this._declineRate = v;
    }
    public get declineExponent(): number {
        return this._declineExponent;
    }
    public set declineExponent(v: number) {
        this._declineExponent = v;
    }
    public get terminalRate(): number {
        return this._terminalRate;
    }
    public set terminalRate(v: number) {
        this._terminalRate = v;
    }
    public get totalTime(): number {
        return this._totalTime;
    }
    public set totalTime(v: number) {
        this._totalTime = v;
    }
    public get numberOfTimeSteps(): number {
        return this._numberOfTimeSteps;
    }
    public set numberOfTimeSteps(v: number) {
        this._numberOfTimeSteps = v;
    }
    public get startDate(): Date {
        return this._startDate
    }
    public set startDate(v: Date) {
        this._dateset=true;
        this._startDate = v;
    }

    public get declinecurve(): number[] {
        let curve = new Array;
        let i: number = 0;
        //console.log(this._totalTime)
        let delta_t: number = this._totalTime / (this._numberOfTimeSteps - 1)

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
            if (this._rates[i]>this._terminalRate){
                if (this._dateset){
                    curve[i] = [ this._times[i], this._rates[i]];
                }
            }
            else
            {
                break;
            }
            
        }
        return curve;
    }


} //End of class

export { DeclineCurve };

// var mydc=new DeclineCurve();
// console.log(mydc.curveType);