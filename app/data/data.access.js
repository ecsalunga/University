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
    DataAccess.prototype.RecipeSave = function () {
        this.RecipeDAL.Save(this.DL.Recipe);
    };
    DataAccess = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.DataLayer])
    ], DataAccess);
    return DataAccess;
}());
exports.DataAccess = DataAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLmFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1QkFBK0I7QUFFL0IsdUJBQTJDO0FBRzNDO0lBR0ksb0JBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx5QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sK0JBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFiUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBSWUsWUFBUztPQUh4QixVQUFVLENBY3RCO0lBQUQsaUJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFMYXllciB9IGZyb20gXCIuL1wiO1xuXG5pbXBvcnQgeyBSZWNpcGVEQUwsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi9cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFBY2Nlc3Mge1xuICAgIFJlY2lwZURBTDogUmVjaXBlREFMO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBETDogRGF0YUxheWVyKSB7XG4gICAgICAgIHRoaXMuUmVjaXBlREFMID0gbmV3IFJlY2lwZURBTCh0aGlzLkRMKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTG9hZCgpIHtcbiAgICAgICAgdGhpcy5SZWNpcGVEQUwuTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZWNpcGVTYXZlKCkge1xuICAgICAgICB0aGlzLlJlY2lwZURBTC5TYXZlKHRoaXMuREwuUmVjaXBlKTtcbiAgICB9XG59Il19