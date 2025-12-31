import React from "react";

export class Table {

    constructor({columns, rows}) {
        this.columns = columns;
        this.rows = rows;
    }

    toWidget(ctx) {
        return <table className={'Table'}>
            {this.columns.toWidget(ctx)}
            {this.rows.toWidget(ctx)}
        </table>
    }
}
