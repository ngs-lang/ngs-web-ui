import {Scalar} from "./ngs-types/Scalar";
import {List} from "./ngs-types/List";
import {Properties} from "./ngs-types/Properties";
import {Timeline} from "./ngs-types/Timeline";
import {GroupTimelineItem} from "./ngs-types/GroupTimelineItem";
import {TextualCommandTimelineItem} from "./ngs-types/TextualCommandTimelineItem";
import {InfoTimelineItem} from "./ngs-types/InfoTimelineItem";
import {GuessTimelineItem} from "./ngs-types/GuessTimelineItem";
import {ResultTimelineItem} from "./ngs-types/ResultTimelineItem";
import {Table} from "./ngs-types/Table";
import {Column} from "./ngs-types/Column";
import {Columns} from "./ngs-types/Columns";
import {Row} from "./ngs-types/Row";
import {Rows} from "./ngs-types/Rows";
import {Progress} from "./ngs-types/Progress";
import {ProcessStatus} from "./ngs-types/ProcessStatus";
import {Object_} from "./ngs-types/Object";
//
// Reorganize: 'types' should be in a separate file
const types = {
    Scalar,
    List,
    Properties,

    GroupTimelineItem,
    Timeline,
    TextualCommandTimelineItem,
    InfoTimelineItem,
    GuessTimelineItem,
    ResultTimelineItem,

    Object: Object_,
    ProcessStatus,
    Progress,

    Table,
    Column,
    Columns,
    Row,
    Rows
}

function filterObj(x, pred) {
    return Object.fromEntries(Object.entries(x).filter(([k, v]) => pred(k, v)));
}

export function deserialize(x) {
    if(Array.isArray(x)) {
        return x.map(deserialize);
    }
    if(x === null) {
        return null;
    }
    if(typeof x === 'object') {
        // NGS: xx = x.filterk(Not('$type'))
        // TS:
        const xx = filterObj(x, (k, _) => k !== '$type');
        // TODO: sanitize?
        // NGS: o = x.mapv(deserialize)
        // TS:
        if(x['$type'] === '$raw') {
            return xx;
        }
        const o = Object.fromEntries(Object.entries(xx).map(entry => {
            return [entry[0], deserialize(entry[1])]
        }));
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
