import React from "react";

export class SpecialScalar {
    constructor(a) {
        this.data = a;
    }

    toWidget() {
        return <span>{this.data.value.toString()}</span>
    }
}
