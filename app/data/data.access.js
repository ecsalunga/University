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
    DataAccess = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.DataLayer])
    ], DataAccess);
    return DataAccess;
}());
exports.DataAccess = DataAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLmFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1QkFBK0I7QUFFL0IsdUJBQTJDO0FBRzNDO0lBR0ksb0JBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx5QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBVFEsVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQUllLFlBQVM7T0FIeEIsVUFBVSxDQVV0QjtJQUFELGlCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhTGF5ZXIgfSBmcm9tIFwiLi9cIjtcblxuaW1wb3J0IHsgUmVjaXBlREFMLCBSZWNpcGVJbmZvIH0gZnJvbSBcIi4vXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhQWNjZXNzIHtcbiAgICBSZWNpcGVEQUw6IFJlY2lwZURBTDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgREw6IERhdGFMYXllcikge1xuICAgICAgICB0aGlzLlJlY2lwZURBTCA9IG5ldyBSZWNpcGVEQUwodGhpcy5ETCk7XG4gICAgfVxuXG4gICAgcHVibGljIExvYWQoKSB7XG4gICAgICAgIHRoaXMuUmVjaXBlREFMLkxvYWQoKTtcbiAgICB9XG59Il19