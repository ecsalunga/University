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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtQ0FBa0M7QUFDbEMsbUNBQStEO0FBUS9EO0lBR0UsK0JBQW1CLElBQVUsRUFBVSxFQUFjLEVBQVUsRUFBYTtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7UUFDMUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSTtZQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFDbkMsQ0FBQztJQWxCVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBSXlCLFdBQUksRUFBYyxpQkFBVSxFQUFjLGdCQUFTO09BSGpFLHFCQUFxQixDQW1CakM7SUFBRCw0QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3JlY2lwZS1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2lwZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIG1vZGVsOiBSZWNpcGVJbmZvO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29yZTogQ29yZSwgcHJpdmF0ZSBEQTogRGF0YUFjY2VzcywgcHJpdmF0ZSBETDogRGF0YUxheWVyKSB7XHJcbiAgICBpZih0aGlzLkRMLlJlY2lwZSA9PSBudWxsKVxyXG4gICAgICB0aGlzLm1vZGVsID0gbmV3IFJlY2lwZUluZm8oKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuREwuUmVjaXBlO1xyXG4gIH1cclxuXHJcbiAgU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwuTmFtZSk7XHJcbiAgICB0aGlzLkRBLlJlY2lwZVNhdmUodGhpcy5tb2RlbCk7XHJcbiAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChcInJlY2lwZS1saXN0XCIpO1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgRGV0YWlsc1wiO1xyXG4gIH1cclxufVxyXG4iXX0=