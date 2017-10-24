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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsZ0NBQStCO0FBSS9CO0lBTUksbUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUUzQixpQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBVlEsU0FBUztRQURyQixpQkFBVSxFQUFFO3lDQU9pQixXQUFJO09BTnJCLFNBQVMsQ0FXckI7SUFBRCxnQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4uL2NvcmVcIjtcclxuaW1wb3J0IHsgUmVjaXBlSW5mbyB9IGZyb20gXCIuL1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YUxheWVyIHtcclxuICAgIFRJVExFOiBzdHJpbmc7XHJcblxyXG4gICAgUmVjaXBlOiBSZWNpcGVJbmZvO1xyXG4gICAgUmVjaXBlczogQXJyYXk8UmVjaXBlSW5mbz47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3JlOiBDb3JlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XHJcbiAgICB9XHJcbn0iXX0=