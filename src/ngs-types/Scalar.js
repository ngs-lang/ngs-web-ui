import React from "react";

export class Scalar {
    constructor(a) {
        this.value = a;
    }

    toWidget() {
        if (this.value === null) {
            return <span className="unobtrusive">-</span>
        }
        return <span>{this.value.toString()}</span>
    }

    static deserialize(a) {
        return new Scalar(a.value);
    }
}
