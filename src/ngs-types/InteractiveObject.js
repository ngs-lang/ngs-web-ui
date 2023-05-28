import React from "react";
import {toWidget} from "../ngs-types";

export class InteractiveObject {
    constructor(a) {
        this.data = a;
    }

    /*
        Example from NGS side:
        id = pipeline.name
        text = pipeline.name
        obj_type = 'AlphaTypeAwsPipeline'
        default_action = 'View CodePipeline'
     */

    toWidget() {
        function onClick(event) {
            event.preventDefault()
            console.log('InteractiveObject onClick', this.data);
            // window.location.href = '/ngs/' + this.data.fields.obj_type.value + '/' + this.data.fields.id.value;
        }
        return <a title={'Unique ID: ' + this.data.fields.id.value} onClick={onClick.bind(this)} href={"todo InteractiveObject link href"}>
            {toWidget(this.data.fields.text)}
        </a>
    }
}
