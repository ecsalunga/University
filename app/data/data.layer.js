"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var DataLayer = (function () {
    function DataLayer(core, ngZone) {
        this.core = core;
        this.ngZone = ngZone;
        this.NO_IMAGE_URL = "res://images/noimage";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsZ0NBQStCO0FBSS9CO0lBUUksbUJBQW9CLElBQVUsRUFBUyxNQUFjO1FBQWpDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTnJELGlCQUFZLEdBQVcsc0JBQXNCLENBQUM7SUFNVSxDQUFDO0lBRWxELGlDQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFaUSxTQUFTO1FBRHJCLGlCQUFVLEVBQUU7eUNBU2lCLFdBQUksRUFBaUIsYUFBTTtPQVI1QyxTQUFTLENBYXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBSZWNpcGVJbmZvIH0gZnJvbSBcIi4vXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhTGF5ZXIge1xuICAgIFRJVExFOiBzdHJpbmc7XG4gICAgTk9fSU1BR0VfVVJMOiBzdHJpbmcgPSBcInJlczovL2ltYWdlcy9ub2ltYWdlXCI7XG4gICAgREFUQV9VcGxvYWRTdGF0dXM6IE51bWJlcjtcblxuICAgIFJlY2lwZTogUmVjaXBlSW5mbztcbiAgICBSZWNpcGVzOiBBcnJheTxSZWNpcGVJbmZvPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZTogQ29yZSwgcHVibGljIG5nWm9uZTogTmdab25lKSB7fVxuXG4gICAgcHVibGljIExvYWRDb21wb25lbnQoc2VsZWN0b3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XG4gICAgfVxufSJdfQ==