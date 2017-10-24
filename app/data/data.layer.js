"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var DataLayer = (function () {
    function DataLayer(core, ngZone) {
        this.core = core;
        this.ngZone = ngZone;
    }
    DataLayer.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    DataLayer = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.Core, core_1.NgZone])
    ], DataLayer);
    return DataLayer;
}());
exports.DataLayer = DataLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsZ0NBQStCO0FBSS9CO0lBTUksbUJBQW9CLElBQVUsRUFBUyxNQUFjO1FBQWpDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUVsRCxpQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBVlEsU0FBUztRQURyQixpQkFBVSxFQUFFO3lDQU9pQixXQUFJLEVBQWlCLGFBQU07T0FONUMsU0FBUyxDQVdyQjtJQUFELGdCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUmVjaXBlSW5mbyB9IGZyb20gXCIuL1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YUxheWVyIHtcbiAgICBUSVRMRTogc3RyaW5nO1xuXG4gICAgUmVjaXBlOiBSZWNpcGVJbmZvO1xuICAgIFJlY2lwZXM6IEFycmF5PFJlY2lwZUluZm8+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3JlOiBDb3JlLCBwdWJsaWMgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgICBwdWJsaWMgTG9hZENvbXBvbmVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KHNlbGVjdG9yKTtcbiAgICB9XG59Il19