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
    AppComponent.prototype.IsDetail = function () {
        return this.core.selector == "recipe-detail";
    };
    AppComponent.prototype.Add = function () {
        this.DL.Recipe = null;
        this.LoadComponent("recipe-detail");
    };
    AppComponent.prototype.Save = function () {
        this.DA.RecipeSave();
        this.loadList();
    };
    AppComponent.prototype.Cancel = function () {
        this.loadList();
    };
    AppComponent.prototype.loadList = function () {
        this.LoadComponent("recipe-list");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.DA.Load();
        this.DL.TITLE = "Recipe Helper";
        this.core.viewChild = this.viewChild;
        this.loadList();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsK0JBQThCO0FBQzlCLCtCQUEyRDtBQVEzRDtJQUlJLHNCQUFtQixJQUFVLEVBQVMsRUFBYyxFQUFTLEVBQWE7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUksQ0FBQztJQUV4RSxvQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUM7SUFDakQsQ0FBQztJQUVNLDBCQUFHLEdBQVY7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sMkJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTywrQkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFuQ0Q7UUFEQyxnQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSx1QkFBZ0IsRUFBQyxDQUFDO2tDQUN0Qyx1QkFBZ0I7bURBQUM7SUFGbkIsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQU0yQixXQUFJLEVBQWEsaUJBQVUsRUFBYSxnQkFBUztPQUpqRSxZQUFZLENBc0N4QjtJQUFELG1CQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgndmlld0NoaWxkJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxuICAgIHZpZXdDaGlsZDogVmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3JlOiBDb3JlLCBwdWJsaWMgREE6IERhdGFBY2Nlc3MsIHB1YmxpYyBETDogRGF0YUxheWVyKSB7IH1cblxuICAgIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb3JlLkxvYWRDb21wb25lbnQoc2VsZWN0b3IpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgSXNEZXRhaWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VsZWN0b3IgPT0gXCJyZWNpcGUtZGV0YWlsXCI7XG4gICAgfVxuXG4gICAgcHVibGljIEFkZCgpIHtcbiAgICAgICAgdGhpcy5ETC5SZWNpcGUgPSBudWxsO1xuICAgICAgICB0aGlzLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtZGV0YWlsXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTYXZlKCkge1xuICAgICAgICB0aGlzLkRBLlJlY2lwZVNhdmUoKTtcbiAgICAgICAgdGhpcy5sb2FkTGlzdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBDYW5jZWwoKSB7XG4gICAgICAgIHRoaXMubG9hZExpc3QoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRMaXN0KCkge1xuICAgICAgICB0aGlzLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtbGlzdFwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5EQS5Mb2FkKCk7XG4gICAgICAgIHRoaXMuREwuVElUTEUgPSBcIlJlY2lwZSBIZWxwZXJcIjtcbiAgICAgICAgdGhpcy5jb3JlLnZpZXdDaGlsZCA9IHRoaXMudmlld0NoaWxkO1xuICAgICAgICB0aGlzLmxvYWRMaXN0KCk7XG4gICAgfVxufSJdfQ==