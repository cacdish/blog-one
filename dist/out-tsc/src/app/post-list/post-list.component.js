import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var PostListComponent = /** @class */ (function () {
    function PostListComponent() {
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    PostListComponent.prototype.setLoveIt = function (loveIts) {
        this.postLoveIts++;
    };
    PostListComponent.prototype.setDontLoveIts = function (dtLoveIts) {
        this.postLoveIts--;
    };
    PostListComponent.prototype.getPostLoveIts = function () {
        return this.postLoveIts;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], PostListComponent.prototype, "posts", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], PostListComponent.prototype, "postLoveIts", void 0);
    PostListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-post-list',
            templateUrl: './post-list.component.html',
            styleUrls: ['./post-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PostListComponent);
    return PostListComponent;
}());
export { PostListComponent };
//# sourceMappingURL=post-list.component.js.map