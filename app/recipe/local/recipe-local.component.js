"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("../../data");
var RecipeLocalComponent = (function () {
    function RecipeLocalComponent(DL) {
        this.DL = DL;
    }
    RecipeLocalComponent.prototype.ngOnInit = function () {
        this.DL.TITLE = "Local Recipes ";
    };
    RecipeLocalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-local',
            templateUrl: './recipe-local.component.html',
            styleUrls: ['./recipe-local.component.scss']
        }),
        __metadata("design:paramtypes", [data_1.DataLayer])
    ], RecipeLocalComponent);
    return RecipeLocalComponent;
}());
exports.RecipeLocalComponent = RecipeLocalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWxvY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY2lwZS1sb2NhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUNBQXVDO0FBUXZDO0lBRUUsOEJBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUksQ0FBQztJQUV0Qyx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFDbkMsQ0FBQztJQU5VLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzt5Q0FHd0IsZ0JBQVM7T0FGdEIsb0JBQW9CLENBT2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUxheWVyIH0gZnJvbSBcIi4uLy4uL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmVjaXBlLWxvY2FsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1sb2NhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlY2lwZS1sb2NhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlY2lwZUxvY2FsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIERMOiBEYXRhTGF5ZXIpIHsgfVxuICBcbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMuREwuVElUTEUgPSBcIkxvY2FsIFJlY2lwZXMgXCI7XG4gIH1cbn1cbiJdfQ==