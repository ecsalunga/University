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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsK0JBQThCO0FBQzlCLCtCQUEyRDtBQVEzRDtJQUlJLHNCQUFtQixJQUFVLEVBQVMsRUFBYyxFQUFTLEVBQWE7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUksQ0FBQztJQUV4RSxvQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUM7SUFDakQsQ0FBQztJQUVNLDBCQUFHLEdBQVY7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQXpCRDtRQURDLGdCQUFTLENBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7a0NBQ3RDLHVCQUFnQjttREFBQztJQUZuQixZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBTTJCLFdBQUksRUFBYSxpQkFBVSxFQUFhLGdCQUFTO09BSmpFLFlBQVksQ0E0QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL2NvcmVcIjtcbmltcG9ydCB7IERhdGFMYXllciwgRGF0YUFjY2VzcywgUmVjaXBlSW5mbyB9IGZyb20gXCIuL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCd2aWV3Q2hpbGQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gICAgdmlld0NoaWxkOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUsIHB1YmxpYyBEQTogRGF0YUFjY2VzcywgcHVibGljIERMOiBEYXRhTGF5ZXIpIHsgfVxuXG4gICAgcHVibGljIExvYWRDb21wb25lbnQoc2VsZWN0b3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBJc0FkZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWxlY3RvciA9PSBcInJlY2lwZS1kZXRhaWxcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgQWRkKCkge1xuICAgICAgICB0aGlzLkRMLlJlY2lwZSA9IG51bGw7XG4gICAgICAgIHRoaXMuTG9hZENvbXBvbmVudChcInJlY2lwZS1kZXRhaWxcIik7XG4gICAgfVxuXG4gICAgcHVibGljIENhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWxpc3RcIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuREEuTG9hZCgpO1xuICAgICAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgSGVscGVyXCI7XG4gICAgICAgIHRoaXMuY29yZS52aWV3Q2hpbGQgPSB0aGlzLnZpZXdDaGlsZDtcbiAgICB9XG59Il19