import React from "react";

export class SpecialScalar {
    constructor(a) {
        this.data = a;
    }

    toWidget() {
        if (this.data.value === null) {
            return <span className="unobtrusive">-</span>
        }
        return <span>{this.data.value.toString()}</span>
    }
}
