import React from "react";

export class Scalar {
    constructor({value}) {
        this.value = value;
    }
    toWidget() {
        if (this.value === null) {
            return <span className="unobtrusive">-</span>
        }
        return <span>{this.value.toString()}</span>
    }
}
