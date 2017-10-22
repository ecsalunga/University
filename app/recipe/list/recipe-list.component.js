"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("../../data");
var RecipeListComponent = (function () {
    function RecipeListComponent(DL) {
        var _this = this;
        this.DL = DL;
        this.countries = new Array();
        this.DL.Recipes.forEach(function (item) {
            _this.countries.push(new data_1.RecipeInfo(item.Name));
        });
    }
    RecipeListComponent.prototype.SelectItem = function (item) {
        console.log("Item Selected: " + item.Name);
    };
    RecipeListComponent.prototype.ngOnInit = function () {
        this.DL.TITLE = "Online Recipes";
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [data_1.DataLayer])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjaXBlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLG1DQUFtRDtBQVNuRDtJQUdFLDZCQUFvQixFQUFhO1FBQWpDLGlCQUtDO1FBTG1CLE9BQUUsR0FBRixFQUFFLENBQVc7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztJQUNuQyxDQUFDO0lBaEJVLG1CQUFtQjtRQVAvQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7WUFDM0MsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzt5Q0FJd0IsZ0JBQVM7T0FIdEIsbUJBQW1CLENBaUIvQjtJQUFELDBCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWNpcGUtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWNpcGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlY2lwZS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFJlY2lwZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY291bnRyaWVzOiBBcnJheTxSZWNpcGVJbmZvPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIERMOiBEYXRhTGF5ZXIpIHsgXG4gICAgdGhpcy5jb3VudHJpZXMgPSBuZXcgQXJyYXk8UmVjaXBlSW5mbz4oKTtcbiAgICB0aGlzLkRMLlJlY2lwZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuY291bnRyaWVzLnB1c2gobmV3IFJlY2lwZUluZm8oaXRlbS5OYW1lKSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgU2VsZWN0SXRlbShpdGVtKSB7XG4gICAgY29uc29sZS5sb2coXCJJdGVtIFNlbGVjdGVkOiBcIiArIGl0ZW0uTmFtZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5ETC5USVRMRSA9IFwiT25saW5lIFJlY2lwZXNcIjtcbiAgfVxufVxuIl19