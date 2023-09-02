import {Process} from "./ngs-types/Process";
import {Arr} from "./ngs-types/Arr";
import {Scalar} from "./ngs-types/Scalar";
import {Hash} from "./ngs-types/Hash";
import {Table} from "./ngs-types/Table";
import {InteractiveObject} from "./ngs-types/InteractiveObject";
import {Progress} from "./ngs-types/Progress";
import {Revision} from "./ngs-types/Revision";
import {Source} from "./ngs-types/Source";
import {Action} from "./ngs-types/Action";
import {LongStr} from "./ngs-types/LongStr";
import {Succeeded, Failed} from "./ngs-types/ProcessStatus";

const types = {}

types['ngs:type:Process'] = Process;
types['ngs:type:saws::Progress'] = Progress;
types['ngs:type:saws::Revision'] = Revision;
types['ngs:type:saws::Source'] = Source;
types['ngs:type:saws::Action'] = Action;
types['ngs:type:saws::LongStr'] = LongStr;
types['ngs:type:ProcessStatus::Failed'] = Failed;
types['ngs:type:ProcessStatus::Succeeded'] = Succeeded;


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
