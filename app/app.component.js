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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsK0JBQThCO0FBQzlCLCtCQUEyRDtBQVEzRDtJQUlJLHNCQUFtQixJQUFVLEVBQVMsRUFBYyxFQUFTLEVBQWE7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUksQ0FBQztJQUV4RSxvQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUM7SUFDakQsQ0FBQztJQUVNLDBCQUFHLEdBQVY7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQXpCRDtRQURDLGdCQUFTLENBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7a0NBQ3RDLHVCQUFnQjttREFBQztJQUZuQixZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBTTJCLFdBQUksRUFBYSxpQkFBVSxFQUFhLGdCQUFTO09BSmpFLFlBQVksQ0E0QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZCgndmlld0NoaWxkJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxyXG4gICAgdmlld0NoaWxkOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3JlOiBDb3JlLCBwdWJsaWMgREE6IERhdGFBY2Nlc3MsIHB1YmxpYyBETDogRGF0YUxheWVyKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgTG9hZENvbXBvbmVudChzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb3JlLkxvYWRDb21wb25lbnQoc2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgSXNBZGRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWxlY3RvciA9PSBcInJlY2lwZS1kZXRhaWxcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkKCkge1xyXG4gICAgICAgIHRoaXMuREwuUmVjaXBlID0gbnVsbDtcclxuICAgICAgICB0aGlzLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtZGV0YWlsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWxpc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5EQS5Mb2FkKCk7XHJcbiAgICAgICAgdGhpcy5ETC5USVRMRSA9IFwiUmVjaXBlIEhlbHBlclwiO1xyXG4gICAgICAgIHRoaXMuY29yZS52aWV3Q2hpbGQgPSB0aGlzLnZpZXdDaGlsZDtcclxuICAgIH1cclxufSJdfQ==