import React from "react";

export class Object_ {
    constructor({children, id}) {
        this.id = id;
        this.children = children;
    }

    toWidget() {
        return <div className={'Object'} title={JSON.stringify(this.id)}>
            {
                this.children.map((v, i) =>
                    <div key={i}>{v.toWidget()}</div>
                )
            }
        </div>
    }

}
