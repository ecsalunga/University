"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("./core");
var data_1 = require("./data");
var AppComponent = (function () {
    function AppComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
    }
    AppComponent.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    AppComponent.prototype.IsAdding = function () {
        return this.core.selector == "recipe-detail";
    };
    AppComponent.prototype.Add = function () {
        this.DL.Recipe = null;
        this.LoadComponent("recipe-detail");
    };
    AppComponent.prototype.Cancel = function () {
        this.LoadComponent("recipe-list");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.DA.Load();
        this.DL.TITLE = "Recipe Helper";
        this.core.viewChild = this.viewChild;
        this.LoadComponent("recipe-list");
    };
    __decorate([
        core_1.ViewChild('viewChild', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], AppComponent.prototype, "viewChild", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ['app.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataAccess, data_1.DataLayer])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsK0JBQThCO0FBQzlCLCtCQUEyRDtBQVEzRDtJQUlJLHNCQUFtQixJQUFVLEVBQVMsRUFBYyxFQUFTLEVBQWE7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUksQ0FBQztJQUV4RSxvQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUM7SUFDakQsQ0FBQztJQUVNLDBCQUFHLEdBQVY7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBMUJEO1FBREMsZ0JBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsdUJBQWdCLEVBQUMsQ0FBQztrQ0FDdEMsdUJBQWdCO21EQUFDO0lBRm5CLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FNMkIsV0FBSSxFQUFhLGlCQUFVLEVBQWEsZ0JBQVM7T0FKakUsWUFBWSxDQTZCeEI7SUFBRCxtQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFMYXllciwgRGF0YUFjY2VzcywgUmVjaXBlSW5mbyB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKCd2aWV3Q2hpbGQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pXHJcbiAgICB2aWV3Q2hpbGQ6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUsIHB1YmxpYyBEQTogRGF0YUFjY2VzcywgcHVibGljIERMOiBEYXRhTGF5ZXIpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBJc0FkZGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3JlLnNlbGVjdG9yID09IFwicmVjaXBlLWRldGFpbFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBZGQoKSB7XHJcbiAgICAgICAgdGhpcy5ETC5SZWNpcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuTG9hZENvbXBvbmVudChcInJlY2lwZS1kZXRhaWxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtbGlzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLkRBLkxvYWQoKTtcclxuICAgICAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgSGVscGVyXCI7XHJcbiAgICAgICAgdGhpcy5jb3JlLnZpZXdDaGlsZCA9IHRoaXMudmlld0NoaWxkO1xyXG4gICAgICAgIHRoaXMuTG9hZENvbXBvbmVudChcInJlY2lwZS1saXN0XCIpO1xyXG4gICAgfVxyXG59Il19