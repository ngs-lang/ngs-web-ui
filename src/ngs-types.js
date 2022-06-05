import React from "react";
import {Process} from "./ngs-types/Process";
import {Arr} from "./ngs-types/Arr";
import {SpecialScalar} from "./ngs-types/SpecialScalar";

const types = {}

types['ngs:type:Process'] = Process;


types['ngs:type:Arr'] = Arr;

types['ngs:type:Null'] = SpecialScalar;
types['ngs:type:Bool'] = SpecialScalar;
types['ngs:type:Int'] = SpecialScalar;
types['ngs:type:Real'] = SpecialScalar;
types['ngs:type:Str'] = SpecialScalar;


export function toWidget(x) {
    if (types[x.type]) {
        return (new types[x.type](x)).toWidget();
    }
    return <div>toWidget() can't handle type {x.type} yet</div>
}
