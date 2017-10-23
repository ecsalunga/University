"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var data_1 = require("../../data");
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
        if (this.DL.Recipe == null)
            this.model = new data_1.RecipeInfo();
        else
            this.model = this.DL.Recipe;
    }
    RecipeDetailComponent.prototype.Save = function () {
        console.log(this.model.Name);
        this.DA.RecipeSave(this.model);
        this.core.LoadComponent("recipe-list");
    };
    RecipeDetailComponent.prototype.ngOnInit = function () {
        this.DL.TITLE = "Recipe Details";
    };
    RecipeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-detail',
            templateUrl: './recipe-detail.component.html',
            styleUrls: ['./recipe-detail.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataAccess, data_1.DataLayer])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtQ0FBa0M7QUFDbEMsbUNBQStEO0FBUS9EO0lBR0UsK0JBQW1CLElBQVUsRUFBVSxFQUFjLEVBQVUsRUFBYTtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7UUFDMUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSTtZQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFDbkMsQ0FBQztJQWxCVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBSXlCLFdBQUksRUFBYyxpQkFBVSxFQUFjLGdCQUFTO09BSGpFLHFCQUFxQixDQW1CakM7SUFBRCw0QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7IERhdGFMYXllciwgRGF0YUFjY2VzcywgUmVjaXBlSW5mbyB9IGZyb20gXCIuLi8uLi9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlY2lwZS1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVjaXBlLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbW9kZWw6IFJlY2lwZUluZm87XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUsIHByaXZhdGUgREE6IERhdGFBY2Nlc3MsIHByaXZhdGUgREw6IERhdGFMYXllcikge1xuICAgIGlmKHRoaXMuREwuUmVjaXBlID09IG51bGwpXG4gICAgICB0aGlzLm1vZGVsID0gbmV3IFJlY2lwZUluZm8oKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLm1vZGVsID0gdGhpcy5ETC5SZWNpcGU7XG4gIH1cblxuICBTYXZlKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwuTmFtZSk7XG4gICAgdGhpcy5EQS5SZWNpcGVTYXZlKHRoaXMubW9kZWwpO1xuICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWxpc3RcIik7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgRGV0YWlsc1wiO1xuICB9XG59XG4iXX0=