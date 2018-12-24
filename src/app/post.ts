export class Post {
    constructor(
        private postTitle: string,
        private postContent: string,
        private postLoveIts: number = 0,
        private created_at = new Date()
    ) { }

    loveIts() {
        this.postLoveIts++;
    }

    dontLoveIts() {
        this.postLoveIts--;
    }

    public getCreated_at() {
        return this.postLoveIts;
    }
}
