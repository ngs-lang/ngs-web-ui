import React from "react";

export class Table {

    constructor({columns, rows}) {
        this.columns = columns;
        this.rows = rows;
    }

    toWidget() {
        return <table className={'Table'}>
            {this.columns.toWidget()}
            {this.rows.toWidget()}
        </table>
    }
}
