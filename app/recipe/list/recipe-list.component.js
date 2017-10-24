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
        this.DL.Recipe = Object.assign({}, this.DL.Recipes[args.index]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjaXBlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1DQUFrQztBQUNsQyxtQ0FBbUQ7QUFRbkQ7SUFFRSw2QkFBbUIsSUFBVSxFQUFVLEVBQWE7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDO0lBRWpELHVDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQVhVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzt5Q0FHeUIsV0FBSSxFQUFjLGdCQUFTO09BRnpDLG1CQUFtQixDQVkvQjtJQUFELDBCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuaW1wb3J0IHsgRGF0YUxheWVyLCBSZWNpcGVJbmZvIH0gZnJvbSBcIi4uLy4uL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmVjaXBlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVjaXBlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWNpcGUtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlY2lwZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3JlOiBDb3JlLCBwcml2YXRlIERMOiBEYXRhTGF5ZXIpIHt9XG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgdGhpcy5ETC5SZWNpcGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLkRMLlJlY2lwZXNbYXJncy5pbmRleF0pO1xuICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWRldGFpbFwiKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgTGlzdFwiO1xuICB9XG59XG4iXX0=