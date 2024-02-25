import React from "react";
import connector from "../Connector";

export class Object_ {
    constructor({children, ref}) {
        this.ref = ref;
        this.children = children;
    }

    toWidget() {

        // WIP
        function onClick(event) {
            event.preventDefault()
            console.log('Object_ onClick', this);
            this.call_id = connector.call('ui_default_action', this.ref);
            // connector.addEventListener('message', listener);
        }

        return <div className={'Object'} title={'DEBUG REF ' + JSON.stringify(this.ref)} onClick={onClick.bind(this)}>
            {
                this.children.map((v, i) =>
                    <div key={i}>{v.toWidget()}</div>
                )
            }
        </div>
    }

}
