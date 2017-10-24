"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _1 = require("./");
var _2 = require("./");
var DataAccess = (function () {
    function DataAccess(DL) {
        this.DL = DL;
        this.RecipeDAL = new _2.RecipeDAL(this.DL);
    }
    DataAccess.prototype.Load = function () {
        this.RecipeDAL.Load();
    };
    DataAccess.prototype.RecipeSave = function (item) {
        this.RecipeDAL.Save(item);
    };
    DataAccess = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.DataLayer])
    ], DataAccess);
    return DataAccess;
}());
exports.DataAccess = DataAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLmFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1QkFBK0I7QUFFL0IsdUJBQTJDO0FBRzNDO0lBR0ksb0JBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx5QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsSUFBZ0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWJRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FJZSxZQUFTO09BSHhCLFVBQVUsQ0FjdEI7SUFBRCxpQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhTGF5ZXIgfSBmcm9tIFwiLi9cIjtcclxuXHJcbmltcG9ydCB7IFJlY2lwZURBTCwgUmVjaXBlSW5mbyB9IGZyb20gXCIuL1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YUFjY2VzcyB7XHJcbiAgICBSZWNpcGVEQUw6IFJlY2lwZURBTDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIERMOiBEYXRhTGF5ZXIpIHtcclxuICAgICAgICB0aGlzLlJlY2lwZURBTCA9IG5ldyBSZWNpcGVEQUwodGhpcy5ETCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIExvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5SZWNpcGVEQUwuTG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZWNpcGVTYXZlKGl0ZW06IFJlY2lwZUluZm8pIHtcclxuICAgICAgICB0aGlzLlJlY2lwZURBTC5TYXZlKGl0ZW0pO1xyXG4gICAgfVxyXG59Il19