"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var RecipeDAL = (function () {
    function RecipeDAL(DL) {
        this.DL = DL;
        this.PATH = "/recipe/items";
    }
    RecipeDAL.prototype.Load = function () {
        var _this = this;
        this.DL.Recipes = new Array();
        firebase.query(function (fb) {
            var item = fb.value;
            item.id = fb.key;
            _this.DL.Recipes.push(item);
        }, this.PATH, { orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'Name'
            }
        });
    };
    RecipeDAL.prototype.Save = function (item) {
        if (!item.id)
            firebase.push(this.PATH, item);
        else
            firebase.update(this.PATH + "/" + item.id, item);
    };
    return RecipeDAL;
}());
exports.RecipeDAL = RecipeDAL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjaXBlREFMLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVjaXBlREFMLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQTBEO0FBRTFEO0lBR0ksbUJBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBRmpDLFNBQUksR0FBVyxlQUFlLENBQUM7SUFFTSxDQUFDO0lBRS9CLHdCQUFJLEdBQVg7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7UUFDMUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFBLEVBQUU7WUFDVCxJQUFJLElBQUksR0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxFQUNELElBQUksQ0FBQyxJQUFJLEVBQ0wsRUFBRSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLO2dCQUNyQyxLQUFLLEVBQUUsTUFBTTthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3QkFBSSxHQUFYLFVBQVksSUFBZ0I7UUFDeEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUk7WUFDQSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY2lwZUluZm8sIERhdGFMYXllciB9IGZyb20gXCIuLi9cIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5leHBvcnQgY2xhc3MgUmVjaXBlREFMIHtcbiAgICBQQVRIOiBzdHJpbmcgPSBcIi9yZWNpcGUvaXRlbXNcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgREw6IERhdGFMYXllcikgeyB9XG5cbiAgICBwdWJsaWMgTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ETC5SZWNpcGVzID0gbmV3IEFycmF5PFJlY2lwZUluZm8+KCk7XG4gICAgICAgIGZpcmViYXNlLnF1ZXJ5KGZiID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTpSZWNpcGVJbmZvID0gZmIudmFsdWU7XG4gICAgICAgICAgICAgICAgaXRlbS5pZCA9IGZiLmtleTtcbiAgICAgICAgICAgICAgICB0aGlzLkRMLlJlY2lwZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuUEFUSCxcbiAgICAgICAgICAgICAgICB7IG9yZGVyQnk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5RdWVyeU9yZGVyQnlUeXBlLkNISUxELFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnTmFtZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIFNhdmUoaXRlbTogUmVjaXBlSW5mbykge1xuICAgICAgICBpZighaXRlbS5pZClcbiAgICAgICAgICAgIGZpcmViYXNlLnB1c2godGhpcy5QQVRILCBpdGVtKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZmlyZWJhc2UudXBkYXRlKHRoaXMuUEFUSCArIFwiL1wiICsgaXRlbS5pZCwgaXRlbSk7XG4gICAgfVxufSJdfQ==