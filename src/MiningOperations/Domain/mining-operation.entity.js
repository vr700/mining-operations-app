export class MiningOperation {
    constructor({id = null, title = "", type = "", date = null}) {
        this.id = id || Date.now();
        this.title = title;
        this.type = type;
        this.date = date;
    }
}