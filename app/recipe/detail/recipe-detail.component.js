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
            this.DL.Recipe = new data_1.RecipeInfo();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtQ0FBa0M7QUFDbEMsbUNBQStEO0FBUS9EO0lBRUUsK0JBQW1CLElBQVUsRUFBVSxFQUFjLEVBQVUsRUFBYTtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7UUFDMUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFDbkMsQ0FBQztJQVRVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FHeUIsV0FBSSxFQUFjLGlCQUFVLEVBQWMsZ0JBQVM7T0FGakUscUJBQXFCLENBVWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWNpcGUtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29yZTogQ29yZSwgcHJpdmF0ZSBEQTogRGF0YUFjY2VzcywgcHJpdmF0ZSBETDogRGF0YUxheWVyKSB7XG4gICAgaWYodGhpcy5ETC5SZWNpcGUgPT0gbnVsbClcbiAgICAgIHRoaXMuREwuUmVjaXBlID0gbmV3IFJlY2lwZUluZm8oKTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMuREwuVElUTEUgPSBcIlJlY2lwZSBEZXRhaWxzXCI7XG4gIH1cbn1cbiJdfQ==