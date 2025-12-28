import React from "react";
import { Scalar } from "./Scalar";

export class ResultTimelineItem {
    constructor({children}) {
        this.children = children;
    }

    toWidget() {

        if (this.children.length === 1 && this.children[0] instanceof Scalar) {
            return <div className="ResultTimelineItem">
                <pre>
                    {
                        this.children.map(c => c.toWidget())
                    }
                </pre>
            </div>
        }

        return <div className="ResultTimelineItem">
            {
                this.children.map(c => c.toWidget())
            }
        </div>
    }

}
