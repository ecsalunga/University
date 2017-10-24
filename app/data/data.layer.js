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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsZ0NBQStCO0FBSS9CO0lBTUksbUJBQW9CLElBQVUsRUFBUyxNQUFjO1FBQWpDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUVsRCxpQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBVlEsU0FBUztRQURyQixpQkFBVSxFQUFFO3lDQU9pQixXQUFJLEVBQWlCLGFBQU07T0FONUMsU0FBUyxDQVdyQjtJQUFELGdCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi9jb3JlXCI7XHJcbmltcG9ydCB7IFJlY2lwZUluZm8gfSBmcm9tIFwiLi9cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFMYXllciB7XHJcbiAgICBUSVRMRTogc3RyaW5nO1xyXG5cclxuICAgIFJlY2lwZTogUmVjaXBlSW5mbztcclxuICAgIFJlY2lwZXM6IEFycmF5PFJlY2lwZUluZm8+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZTogQ29yZSwgcHVibGljIG5nWm9uZTogTmdab25lKSB7fVxyXG5cclxuICAgIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XHJcbiAgICB9XHJcbn0iXX0=