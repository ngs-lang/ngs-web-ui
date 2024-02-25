// WIP. Don't remove commented out imports.
// import {Process} from "./ngs-types/Process";
import {Scalar} from "./ngs-types/Scalar";
import {List} from "./ngs-types/List";
// import {Hash} from "./ngs-types/Hash";
import {Properties} from "./ngs-types/Properties";
import {Table} from "./ngs-types/Table";
import {Column} from "./ngs-types/Column";
import {Columns} from "./ngs-types/Columns";
import {Row} from "./ngs-types/Row";
import {Rows} from "./ngs-types/Rows";
// import {InteractiveObject} from "./ngs-types/InteractiveObject";
import {Progress} from "./ngs-types/Progress";
// import {Revision} from "./ngs-types/Revision";
// import {Source} from "./ngs-types/Source";
// import {Action} from "./ngs-types/Action";
// import {LongStr} from "./ngs-types/LongStr";
import {ProcessStatus} from "./ngs-types/ProcessStatus";
import {Object_} from "./ngs-types/Object";
//
// Reorganize: 'types' should be in a separate file
const types = {
    Scalar,
    List,
    Properties,

    Object: Object_,
    ProcessStatus,
    Progress,

    Table,
    Column,
    Columns,
    Row,
    Rows
}

export function deserialize(x) {
    if(Array.isArray(x)) {
        return x.map(deserialize);
    }
    if(x === null) {
        return null;
    }
    if(typeof x === 'object') {
        // TODO: sanitize?
        // NGS: o = x.mapv(deserialize)
        // TS:
        if(x['$type'] === '$raw') {
            return x;
        }
        const o = Object.fromEntries(Object.entries(x).map(entry => {
            return [entry[0], deserialize(entry[1])]
        }));
        delete o['$type']; // TODO: maybe filter out the '$type' key earlier
        if(x['$type'] === 'Hash') {
            return o;
        }
        if(!x['$type']) {
            throw Error('Missing $type in object ' + JSON.stringify(o));
        }
        const t = types[x['$type']];
        if(!t) {
            throw Error(`Unknown type ${x['$type']} in object ${JSON.stringify(o)}`);
        }
        return new t(o);
    }
    // scalar or something unexpected
    return x;
}
