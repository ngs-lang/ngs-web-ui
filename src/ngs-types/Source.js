import {deserialize} from "../ngs-types";

export class Source {
    constructor(repo, branch) {
        this.repo = repo;
        this.branch = branch;
    }

    toWidget() {
        return <span>{this.repo.value}@{this.branch.value}</span>
    }

    static deserialize(a) {
        return new Source(deserialize(a.fields.repo), deserialize(a.fields.branch));
    }

}
