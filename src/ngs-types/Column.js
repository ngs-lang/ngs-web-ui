import React from "react";

export class Column {

    constructor({name}) {
        this.name = name;
    }

    toWidget(_ctx) {
        return <div className={'Column'}>{this.name}</div>
    }

}
