"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var DataLayer = (function () {
    function DataLayer(core) {
        this.core = core;
    }
    DataLayer.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    DataLayer = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.Core])
    ], DataLayer);
    return DataLayer;
}());
exports.DataLayer = DataLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsZ0NBQStCO0FBSS9CO0lBTUksbUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUUzQixpQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBVlEsU0FBUztRQURyQixpQkFBVSxFQUFFO3lDQU9pQixXQUFJO09BTnJCLFNBQVMsQ0FXckI7SUFBRCxnQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBSZWNpcGVJbmZvIH0gZnJvbSBcIi4vXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhTGF5ZXIge1xuICAgIFRJVExFOiBzdHJpbmc7XG5cbiAgICBSZWNpcGU6IFJlY2lwZUluZm87XG4gICAgUmVjaXBlczogQXJyYXk8UmVjaXBlSW5mbz47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmU6IENvcmUpIHt9XG5cbiAgICBwdWJsaWMgTG9hZENvbXBvbmVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KHNlbGVjdG9yKTtcbiAgICB9XG59Il19