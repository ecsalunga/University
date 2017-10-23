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
            var exists = _this.DL.Recipes.find(function (i) { return i.id == item.id; });
            if (exists == null)
                _this.DL.Recipes.push(item);
            else
                exists.Name = item.Name;
        }, this.PATH, { orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'Name'
            }
        });
    };
    RecipeDAL.prototype.Save = function (item) {
        console.log("item: " + item.id + " " + item.Name);
        if (!item.id)
            firebase.push(this.PATH, item);
        else
            firebase.update(this.PATH + "/" + item.id, item);
    };
    return RecipeDAL;
}());
exports.RecipeDAL = RecipeDAL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjaXBlREFMLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVjaXBlREFMLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQTBEO0FBRTFEO0lBR0ksbUJBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBRmpDLFNBQUksR0FBVyxlQUFlLENBQUM7SUFFTSxDQUFDO0lBRS9CLHdCQUFJLEdBQVg7UUFBQSxpQkFrQkM7UUFqQkcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQztRQUMxQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQUEsRUFBRTtZQUNULElBQUksSUFBSSxHQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBRWpCLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM5QixJQUFJO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDLEVBQ0QsSUFBSSxDQUFDLElBQUksRUFDTCxFQUFFLE9BQU8sRUFBRTtnQkFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUs7Z0JBQ3JDLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHdCQUFJLEdBQVgsVUFBWSxJQUFnQjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUk7WUFDQSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY2lwZUluZm8sIERhdGFMYXllciB9IGZyb20gXCIuLi9cIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5leHBvcnQgY2xhc3MgUmVjaXBlREFMIHtcbiAgICBQQVRIOiBzdHJpbmcgPSBcIi9yZWNpcGUvaXRlbXNcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgREw6IERhdGFMYXllcikgeyB9XG5cbiAgICBwdWJsaWMgTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ETC5SZWNpcGVzID0gbmV3IEFycmF5PFJlY2lwZUluZm8+KCk7XG4gICAgICAgIGZpcmViYXNlLnF1ZXJ5KGZiID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTpSZWNpcGVJbmZvID0gZmIudmFsdWU7XG4gICAgICAgICAgICAgICAgaXRlbS5pZCA9IGZiLmtleTtcblxuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSB0aGlzLkRMLlJlY2lwZXMuZmluZChpID0+IGkuaWQgPT0gaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgaWYoZXhpc3RzID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuREwuUmVjaXBlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBleGlzdHMuTmFtZSA9IGl0ZW0uTmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLlBBVEgsXG4gICAgICAgICAgICAgICAgeyBvcmRlckJ5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuUXVlcnlPcmRlckJ5VHlwZS5DSElMRCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ05hbWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBTYXZlKGl0ZW06IFJlY2lwZUluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGVtOiBcIiArIGl0ZW0uaWQgKyBcIiBcIiArIGl0ZW0uTmFtZSk7XG4gICAgICAgIGlmKCFpdGVtLmlkKVxuICAgICAgICAgICAgZmlyZWJhc2UucHVzaCh0aGlzLlBBVEgsIGl0ZW0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBmaXJlYmFzZS51cGRhdGUodGhpcy5QQVRIICsgXCIvXCIgKyBpdGVtLmlkLCBpdGVtKTtcbiAgICB9XG59Il19