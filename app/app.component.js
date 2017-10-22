"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("./core");
var data_1 = require("./data");
var segmented_bar_1 = require("ui/segmented-bar");
var AppComponent = (function () {
    function AppComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
        this.myItems = [];
        var item = new segmented_bar_1.SegmentedBarItem();
        item.title = "Local Recipes";
        this.myItems.push(item);
        item = new segmented_bar_1.SegmentedBarItem();
        item.title = "Online Recipes";
        this.myItems.push(item);
    }
    AppComponent.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    AppComponent.prototype.Save = function () {
        var recipe = new data_1.RecipeInfo("Adobo");
    };
    AppComponent.prototype.onSelectedIndexChange = function (args) {
        var segmetedBar = args.object;
        if (segmetedBar.selectedIndex == 0)
            this.LoadComponent("recipe-local");
        else
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsK0JBQThCO0FBQzlCLCtCQUEyRDtBQUMzRCxrREFBa0U7QUFRbEU7SUFNSSxzQkFBbUIsSUFBVSxFQUFTLEVBQWMsRUFBUyxFQUFhO1FBQXZELFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLGdDQUFnQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIsSUFBSSxHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sNENBQXFCLEdBQTVCLFVBQTZCLElBQUk7UUFDN0IsSUFBSSxXQUFXLEdBQWlCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFNUMsRUFBRSxDQUFBLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2QyxJQUFJO1lBQ0EsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBcENEO1FBREMsZ0JBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsdUJBQWdCLEVBQUMsQ0FBQztrQ0FDdEMsdUJBQWdCO21EQUFDO0lBRm5CLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FRMkIsV0FBSSxFQUFhLGlCQUFVLEVBQWEsZ0JBQVM7T0FOakUsWUFBWSxDQXVDeEI7SUFBRCxtQkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHsgRGF0YUxheWVyLCBEYXRhQWNjZXNzLCBSZWNpcGVJbmZvIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCd2aWV3Q2hpbGQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gICAgdmlld0NoaWxkOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgbXlJdGVtczogQXJyYXk8U2VnbWVudGVkQmFySXRlbT47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29yZTogQ29yZSwgcHVibGljIERBOiBEYXRhQWNjZXNzLCBwdWJsaWMgREw6IERhdGFMYXllcikgeyBcbiAgICAgICAgdGhpcy5teUl0ZW1zID0gW107XG4gICAgICAgIGxldCBpdGVtID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgaXRlbS50aXRsZSA9IFwiTG9jYWwgUmVjaXBlc1wiO1xuICAgICAgICB0aGlzLm15SXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgICBpdGVtID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgaXRlbS50aXRsZSA9IFwiT25saW5lIFJlY2lwZXNcIjtcbiAgICAgICAgdGhpcy5teUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIExvYWRDb21wb25lbnQoc2VsZWN0b3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgU2F2ZSgpIHtcbiAgICAgICAgbGV0IHJlY2lwZSA9IG5ldyBSZWNpcGVJbmZvKFwiQWRvYm9cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2VsZWN0ZWRJbmRleENoYW5nZShhcmdzKSB7XG4gICAgICAgIGxldCBzZWdtZXRlZEJhciA9IDxTZWdtZW50ZWRCYXI+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgaWYoc2VnbWV0ZWRCYXIuc2VsZWN0ZWRJbmRleCA9PSAwKVxuICAgICAgICAgICAgdGhpcy5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWxvY2FsXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtbGlzdFwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5EQS5Mb2FkKCk7XG4gICAgICAgIHRoaXMuREwuVElUTEUgPSBcIlJlY2lwZSBIZWxwZXJcIjtcbiAgICAgICAgdGhpcy5jb3JlLnZpZXdDaGlsZCA9IHRoaXMudmlld0NoaWxkO1xuICAgIH1cbn0iXX0=