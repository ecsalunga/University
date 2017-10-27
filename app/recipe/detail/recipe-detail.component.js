"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var core_2 = require("../../core");
var data_1 = require("../../data");
var imagepicker = require("nativescript-imagepicker");
var firebase = require("nativescript-plugin-firebase");
var fs = require("file-system");
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
        if (this.DL.Recipe == null) {
            this.DL.Recipe = new data_1.RecipeInfo(DL.NO_IMAGE_URL);
        }
        if (!this.DL.Recipe.ImageURL)
            this.DL.Recipe.ImageURL = DL.NO_IMAGE_URL;
        this.imageURL = this.DL.Recipe.ImageURL;
    }
    RecipeDetailComponent.prototype.SelectImage = function () {
        var _this = this;
        var context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });
        context.authorize()
            .then(function () {
            return context.present();
        })
            .then(function (images) {
            images.forEach(function (image) {
                var selected = image.fileUri;
                var source = selected;
                image.getImage().then(function (imagesource) {
                    if (platform_1.isIOS) {
                        source = selected.substr(7, selected.length);
                        var folder = fs.knownFolders.documents();
                        var path = fs.path.join(folder.path, _this.DL.Recipe.Name + '.png');
                        var saved = imagesource.saveToFile(path, "jpeg");
                        if (saved)
                            console.log("saved image " + path);
                        else
                            console.log("Did NOT save image on iOS: " + path);
                        source = path;
                    }
                    firebase.uploadFile({
                        remoteFullPath: 'images/recipes/' + _this.DL.Recipe.Name + '.png',
                        localFullPath: source,
                        onProgress: function (status) {
                            _this.DL.DATA_UploadStatus = status.percentageCompleted;
                        }
                    }).then(function (uploadedFile) {
                        var uploaded = JSON.parse(JSON.stringify(uploadedFile));
                        _this.imageURL = uploaded.url;
                        _this.DL.Recipe.ImageURL = uploaded.url;
                    }, function (error) {
                        console.log("File upload error: " + error);
                    });
                });
            });
        }).catch(function (e) {
            // process error
        });
    };
    RecipeDetailComponent.prototype.Login = function () {
        firebase.login({
            type: firebase.LoginType.FACEBOOK
        }).then(function (result) {
            console.log(JSON.stringify(result));
        }, function (errorMessage) {
            console.log("error: " + errorMessage);
        });
    };
    RecipeDetailComponent.prototype.ngOnInit = function () {
        this.DL.TITLE = "Recipe Details";
    };
    RecipeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-detail',
            templateUrl: './recipe-detail.component.html',
            styleUrls: ['./recipe-detail.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataAccess, data_1.DataLayer])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxQ0FBaUM7QUFDakMsbUNBQWtDO0FBQ2xDLG1DQUErRDtBQUMvRCxzREFBd0Q7QUFDeEQsdURBQTBEO0FBQzFELGdDQUFrQztBQVFsQztJQUdFLCtCQUFtQixJQUFVLEVBQVUsRUFBYyxFQUFVLEVBQWE7UUFBekQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFFNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVNLDJDQUFXLEdBQWxCO1FBQUEsaUJBK0NDO1FBOUNDLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyx3Q0FBd0M7U0FDeEQsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLFNBQVMsRUFBRTthQUNsQixJQUFJLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFB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QztJQTdFVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBSXlCLFdBQUksRUFBYyxpQkFBVSxFQUFjLGdCQUFTO09BSGpFLHFCQUFxQixDQThFakM7SUFBRCw0QkFBQztDQUFBLEFBOUVELElBOEVDO0FBOUVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgZnMgPSByZXF1aXJlKCdmaWxlLXN5c3RlbScpXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlY2lwZS1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVjaXBlLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbWFnZVVSTDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUsIHByaXZhdGUgREE6IERhdGFBY2Nlc3MsIHByaXZhdGUgREw6IERhdGFMYXllcikge1xuICAgIGlmKHRoaXMuREwuUmVjaXBlID09IG51bGwpIHtcbiAgICAgIHRoaXMuREwuUmVjaXBlID0gbmV3IFJlY2lwZUluZm8oREwuTk9fSU1BR0VfVVJMKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5ETC5SZWNpcGUuSW1hZ2VVUkwpXG4gICAgICB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTCA9IERMLk5PX0lNQUdFX1VSTDtcblxuICAgIHRoaXMuaW1hZ2VVUkwgPSB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTDtcbiAgfVxuXG4gIHB1YmxpYyBTZWxlY3RJbWFnZSgpIHtcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICBtb2RlOiBcInNpbmdsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxuICAgIH0pO1xuXG4gICAgY29udGV4dC5hdXRob3JpemUoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgIH0pXG4gICAgLnRoZW4oaW1hZ2VzID0+IHtcbiAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gaW1hZ2UuZmlsZVVyaTtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHNlbGVjdGVkO1xuICAgICAgICBpbWFnZS5nZXRJbWFnZSgpLnRoZW4oaW1hZ2Vzb3VyY2UgPT4ge1xuICAgICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgICAgc291cmNlID0gIHNlbGVjdGVkLnN1YnN0cig3LCBzZWxlY3RlZC5sZW5ndGgpXG4gICAgICAgICAgICBsZXQgZm9sZGVyID0gZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgICAgICAgICAgbGV0IHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIHRoaXMuREwuUmVjaXBlLk5hbWUgKyAnLnBuZycpO1xuICAgICAgICAgICAgbGV0IHNhdmVkID0gaW1hZ2Vzb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcImpwZWdcIik7XG4gICAgICAgICAgICBpZihzYXZlZClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZCBpbWFnZSBcIitwYXRoKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpZCBOT1Qgc2F2ZSBpbWFnZSBvbiBpT1M6IFwiK3BhdGgpXG5cbiAgICAgICAgICAgIHNvdXJjZSA9IHBhdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpcmViYXNlLnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogJ2ltYWdlcy9yZWNpcGVzLycgKyB0aGlzLkRMLlJlY2lwZS5OYW1lICsgJy5wbmcnLFxuICAgICAgICAgICAgICBsb2NhbEZ1bGxQYXRoOiBzb3VyY2UsXG4gICAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuREwuREFUQV9VcGxvYWRTdGF0dXMgPSBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgKHVwbG9hZGVkRmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB1cGxvYWRlZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXBsb2FkZWRGaWxlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVSTCA9IHVwbG9hZGVkLnVybDtcbiAgICAgICAgICAgICAgICB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTCA9IHVwbG9hZGVkLnVybDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgLy8gcHJvY2VzcyBlcnJvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIExvZ2luKCkge1xuICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PS1xuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5ETC5USVRMRSA9IFwiUmVjaXBlIERldGFpbHNcIjtcbiAgfVxufVxuIl19