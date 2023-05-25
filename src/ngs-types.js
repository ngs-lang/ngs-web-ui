import React from "react";
import {Process} from "./ngs-types/Process";
import {Arr} from "./ngs-types/Arr";
import {SpecialScalar} from "./ngs-types/SpecialScalar";
import {ResDef} from "./ngs-types/ResDef";
import {Res} from "./ngs-types/Res";
import {Hash} from "./ngs-types/Hash";

const types = {}

types['ngs:type:Process'] = Process;


types['ngs:type:Arr'] = Arr;
types['ngs:type:Lines'] = Arr; // temp hack
types['ngs:type:Hash'] = Hash;
types['ngs:type:Namespace'] = Hash; // temp hack

types['ngs:type:Null'] = SpecialScalar;
types['ngs:type:Bool'] = SpecialScalar;
types['ngs:type:Int'] = SpecialScalar;
types['ngs:type:Real'] = SpecialScalar;
types['ngs:type:Str'] = SpecialScalar;

// TODO: inheritance & check for ResDef, not specific types
types['ngs:type:AWS2::Vpc'] = ResDef;
types['ngs:type:AWS2::Instance'] = ResDef;


types['ngs:type:AWS2::VpcRes'] = Res;
types['ngs:type:AWS2::InstanceRes'] = Res;

export function toWidget(x) {
    if (types[x.type]) {
        return (new types[x.type](x)).toWidget();
    }
    return <div>toWidget() can't handle type {x.type.toString()} yet</div>
}
