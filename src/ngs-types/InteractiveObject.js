import React from "react";
import {deserialize} from "../ngs-types";

/*
    Example from NGS side:
    id = pipeline.name
    text = pipeline.name
    obj_type = 'AlphaTypeAwsPipeline'
    default_action = 'View CodePipeline'
 */

export class InteractiveObject {
    constructor(id, text, obj_type, default_action) {
        this.id = id;
        this.text = text;
        this.obj_type = obj_type;
        this.default_action = default_action;
    }

    toWidget() {
        function onClick(event) {
            event.preventDefault()
            console.log('InteractiveObject onClick', this);
            // TODO: implement
        }
        return <a title={'Unique ID: ' + this.id.value} onClick={onClick.bind(this)} href={"todo InteractiveObject link href"}>
            {this.text.toWidget()}
        </a>
    }

    static deserialize(a) {
        return new InteractiveObject(deserialize(a.fields.id), deserialize(a.fields.text), deserialize(a.fields.obj_type), deserialize(a.fields.default_action));
    }
}
