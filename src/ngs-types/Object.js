import React from "react";
import connector from "../Connector";

export class Object_ {
    constructor({children, cur, ref}) {
        this.cur = cur;
        this.ref = ref;
        this.children = children;
    }

    toWidget(ctx) {

        // WIP
        function onClick(event) {
            event.preventDefault()
            console.log('Object_ onClick', this);
            this.call_id = connector.call('ui_default_action', {cur: this.cur, ref: this.ref});
            // connector.addEventListener('message', listener);
        }

        return <div className={'Object'} title={'DEBUG ' + JSON.stringify({cur: this.cur, ref: this.ref})} onClick={onClick.bind(this)}>
            {
                this.children.map((v, i) =>
                    <div key={i}>{v.toWidget(ctx)}</div>
                )
            }
        </div>
    }

}
