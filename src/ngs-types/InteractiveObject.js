import React from "react";
import {deserialize} from "../ngs-types";
import connector from "../Connector";

/*
    Example from NGS side:
    id = pipeline.name
    text = pipeline.name
    type = 'AlphaTypeAwsPipeline'
    default_action = 'View CodePipeline'
 */

export class InteractiveObject {
    constructor(type, id, text, default_action) {
        this.id = id;
        this.text = text;
        this.type = type;
        this.default_action = default_action;
        this.call_id = null;
    }

    toWidget() {

        // TODO: Generic Timeline listener for Timeline updates
        const listener = (e) => {
            if (e.detail && e.detail.id === this.call_id) {
                console.log('InteractiveObject got message', e.detail);
                connector.removeEventListener('message', listener);
                if (e.detail.error) {
                    console.error('InteractiveObject got error', e.detail.error);
                    return;
                }
                console.log('TODO');
                // this.setState({'widget': deserialize(e.detail.result).toWidget()});
                const event = deserialize(e.detail.result);
                console.log('InteractiveObject will publish event', event);
                connector.dispatchEvent(new CustomEvent(event.slowGetScalarKey('type').value, {
                    detail: event
                }));
            }
        }

        function onClick(event) {
            event.preventDefault()
            console.log('InteractiveObject onClick', this);
            this.call_id = connector.call('ui_default_action', this.type.value, this.id.value);
            connector.addEventListener('message', listener);

        }
        return <a title={'Unique ID: ' + this.id.value} onClick={onClick.bind(this)} href={"todo InteractiveObject link href"}>
            {this.text.toWidget()}
        </a>
    }

}
