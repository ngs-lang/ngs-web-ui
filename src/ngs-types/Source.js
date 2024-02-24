export class Source {
    constructor(repo, branch) {
        this.repo = repo;
        this.branch = branch;
    }

    toWidget() {
        return <span>{this.repo.value}@{this.branch.value}</span>
    }

}
