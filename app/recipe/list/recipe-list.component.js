"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var data_1 = require("../../data");
var RecipeListComponent = (function () {
    function RecipeListComponent(core, DL) {
        this.core = core;
        this.DL = DL;
    }
    RecipeListComponent.prototype.onItemTap = function (args) {
        this.DL.Recipe = this.DL.Recipes[args.index];
        this.core.LoadComponent("recipe-detail");
    };
    RecipeListComponent.prototype.ngOnInit = function () {
        this.DL.TITLE = "Recipe List";
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataLayer])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjaXBlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1DQUFrQztBQUNsQyxtQ0FBbUQ7QUFRbkQ7SUFFRSw2QkFBbUIsSUFBVSxFQUFVLEVBQWE7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDO0lBRWpELHVDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUFYVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7eUNBR3lCLFdBQUksRUFBYyxnQkFBUztPQUZ6QyxtQkFBbUIsQ0FZL0I7SUFBRCwwQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7IERhdGFMYXllciwgUmVjaXBlSW5mbyB9IGZyb20gXCIuLi8uLi9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlY2lwZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVjaXBlLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29yZTogQ29yZSwgcHJpdmF0ZSBETDogRGF0YUxheWVyKSB7fVxuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIHRoaXMuREwuUmVjaXBlID0gdGhpcy5ETC5SZWNpcGVzW2FyZ3MuaW5kZXhdO1xuICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWRldGFpbFwiKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgTGlzdFwiO1xuICB9XG59XG4iXX0=