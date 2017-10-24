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
            this.model = Object.assign({}, this.DL.Recipe);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtQ0FBa0M7QUFDbEMsbUNBQStEO0FBUS9EO0lBR0UsK0JBQW1CLElBQVUsRUFBVSxFQUFjLEVBQVUsRUFBYTtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7UUFDMUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSTtZQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsb0NBQUksR0FBSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztJQUNuQyxDQUFDO0lBbEJVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FJeUIsV0FBSSxFQUFjLGlCQUFVLEVBQWMsZ0JBQVM7T0FIakUscUJBQXFCLENBbUJqQztJQUFELDRCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFMYXllciwgRGF0YUFjY2VzcywgUmVjaXBlSW5mbyB9IGZyb20gXCIuLi8uLi9kYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmVjaXBlLWRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgbW9kZWw6IFJlY2lwZUluZm87XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3JlOiBDb3JlLCBwcml2YXRlIERBOiBEYXRhQWNjZXNzLCBwcml2YXRlIERMOiBEYXRhTGF5ZXIpIHtcclxuICAgIGlmKHRoaXMuREwuUmVjaXBlID09IG51bGwpXHJcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgUmVjaXBlSW5mbygpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLm1vZGVsID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5ETC5SZWNpcGUpO1xyXG4gIH1cclxuXHJcbiAgU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwuTmFtZSk7XHJcbiAgICB0aGlzLkRBLlJlY2lwZVNhdmUodGhpcy5tb2RlbCk7XHJcbiAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChcInJlY2lwZS1saXN0XCIpO1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgRGV0YWlsc1wiO1xyXG4gIH1cclxufVxyXG4iXX0=