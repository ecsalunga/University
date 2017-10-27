"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var _1 = require("./");
var _2 = require("./");
var DataAccess = (function () {
    function DataAccess(DL) {
        this.DL = DL;
        this.RecipeDAL = new _2.RecipeDAL(this.DL);
    }
    DataAccess.prototype.Load = function () {
        this.RecipeDAL.Load();
        this.userChanged();
    };
    DataAccess.prototype.RecipeSave = function () {
        this.RecipeDAL.Save(this.DL.Recipe);
    };
    DataAccess.prototype.userChanged = function () {
        var _this = this;
        var listener = {
            onAuthStateChanged: function (data) {
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn) {
                    console.log("User info", data.user);
                    _this.DL.User = data.user;
                    _this.DL.UserID = data.user.uid;
                }
            },
            thisArg: this
        };
        firebase.addAuthStateListener(listener);
    };
    DataAccess = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.DataLayer])
    ], DataAccess);
    return DataAccess;
}());
exports.DataAccess = DataAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLmFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBMEQ7QUFFMUQsdUJBQStCO0FBQy9CLHVCQUEyQztBQUczQztJQUdJLG9CQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwrQkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLGdDQUFXLEdBQW5CO1FBQUEsaUJBY0M7UUFiRyxJQUFJLFFBQVEsR0FBRztZQUNYLGtCQUFrQixFQUFFLFVBQUMsSUFBSTtnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDLENBQUM7Z0JBQ2xGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNqQyxDQUFDO1lBQ0gsQ0FBQztZQUNELE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztRQUVKLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBOUJRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FJZSxZQUFTO09BSHhCLFVBQVUsQ0ErQnRCO0lBQUQsaUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5pbXBvcnQgeyBEYXRhTGF5ZXIgfSBmcm9tIFwiLi9cIjtcbmltcG9ydCB7IFJlY2lwZURBTCwgUmVjaXBlSW5mbyB9IGZyb20gXCIuL1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YUFjY2VzcyB7XG4gICAgUmVjaXBlREFMOiBSZWNpcGVEQUw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIERMOiBEYXRhTGF5ZXIpIHtcbiAgICAgICAgdGhpcy5SZWNpcGVEQUwgPSBuZXcgUmVjaXBlREFMKHRoaXMuREwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBMb2FkKCkge1xuICAgICAgICB0aGlzLlJlY2lwZURBTC5Mb2FkKCk7XG4gICAgICAgIHRoaXMudXNlckNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVjaXBlU2F2ZSgpIHtcbiAgICAgICAgdGhpcy5SZWNpcGVEQUwuU2F2ZSh0aGlzLkRMLlJlY2lwZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1c2VyQ2hhbmdlZCgpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0ge1xuICAgICAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBpbmZvXCIsIGRhdGEudXNlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5ETC5Vc2VyID0gZGF0YS51c2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuREwuVXNlcklEID0gZGF0YS51c2VyLnVpZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNBcmc6IHRoaXNcbiAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZmlyZWJhc2UuYWRkQXV0aFN0YXRlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH1cbn0iXX0=