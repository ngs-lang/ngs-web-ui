import {Process} from "./ngs-types/Process";
import {Arr} from "./ngs-types/Arr";
import {Scalar} from "./ngs-types/Scalar";
import {Hash} from "./ngs-types/Hash";
import {Table} from "./ngs-types/Table";
import {InteractiveObject} from "./ngs-types/InteractiveObject";

const types = {}

types['ngs:type:Process'] = Process;


types['ngs:type:Arr'] = Arr;
types['ngs:type:Lines'] = Arr; // temp hack
types['ngs:type:Hash'] = Hash;
types['ngs:type:Namespace'] = Hash; // temp hack
types['ngs:type:Table2::Table'] = Table;
types['ngs:type:ui::InteractiveObject'] = InteractiveObject;

types['ngs:type:Null'] = Scalar;
types['ngs:type:Bool'] = Scalar;
types['ngs:type:Int'] = Scalar;
types['ngs:type:Real'] = Scalar;
types['ngs:type:Str'] = Scalar;

export function deserialize(x) {
    console.log('before deserializing', x);
    if (types[x.type]) {
        if(!types[x.type].deserialize) {
            throw new Error(`${x.type.toString()} has no deserialize() yet`);
        }
        return types[x.type].deserialize(x);
    }
    throw new Error(`deserialize() can't handle type ${x.type.toString()} yet`);
}
