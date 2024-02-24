import React from "react";

export class Column {

    constructor({name}) {
        this.name = name;
    }

    toWidget() {
        return <div className={'Column'}>{this.name}</div>
    }

}
