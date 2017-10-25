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
                        _this.DL.ngZone.run(function () {
                            var uploaded = JSON.parse(JSON.stringify(uploadedFile));
                            _this.imageURL = uploaded.url;
                            _this.DL.Recipe.ImageURL = uploaded.url;
                        });
                    }, function (error) {
                        console.log("File upload error: " + error);
                    });
                });
            });
        }).catch(function (e) {
            // process error
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxQ0FBaUM7QUFDakMsbUNBQWtDO0FBQ2xDLG1DQUErRDtBQUMvRCxzREFBd0Q7QUFDeEQsdURBQTBEO0FBQzFELGdDQUFrQztBQVFsQztJQUdFLCtCQUFtQixJQUFVLEVBQVUsRUFBYyxFQUFVLEVBQWE7UUFBekQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQzFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFFNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVNLDJDQUFXLEdBQWxCO1FBQUEsaUJBaURDO1FBaERDLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyx3Q0FBd0M7U0FDeEQsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLFNBQVMsRUFBRTthQUNsQixJQUFJLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFB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QXBFRCxJQW9FQztBQXBFWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuaW1wb3J0IHsgRGF0YUxheWVyLCBEYXRhQWNjZXNzLCBSZWNpcGVJbmZvIH0gZnJvbSBcIi4uLy4uL2RhdGFcIjtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IGZzID0gcmVxdWlyZSgnZmlsZS1zeXN0ZW0nKVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWNpcGUtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW1hZ2VVUkw6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3JlOiBDb3JlLCBwcml2YXRlIERBOiBEYXRhQWNjZXNzLCBwcml2YXRlIERMOiBEYXRhTGF5ZXIpIHtcbiAgICBpZih0aGlzLkRMLlJlY2lwZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLkRMLlJlY2lwZSA9IG5ldyBSZWNpcGVJbmZvKERMLk5PX0lNQUdFX1VSTCk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuREwuUmVjaXBlLkltYWdlVVJMKVxuICAgICAgdGhpcy5ETC5SZWNpcGUuSW1hZ2VVUkwgPSBETC5OT19JTUFHRV9VUkw7XG5cbiAgICB0aGlzLmltYWdlVVJMID0gdGhpcy5ETC5SZWNpcGUuSW1hZ2VVUkw7XG4gIH1cblxuICBwdWJsaWMgU2VsZWN0SW1hZ2UoKSB7XG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xuICAgICAgbW9kZTogXCJzaW5nbGVcIiAvLyB1c2UgXCJtdWx0aXBsZVwiIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cbiAgICB9KTtcblxuICAgIGNvbnRleHQuYXV0aG9yaXplKClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICB9KVxuICAgIC50aGVuKGltYWdlcyA9PiB7XG4gICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IGltYWdlLmZpbGVVcmk7XG4gICAgICAgIGxldCBzb3VyY2UgPSBzZWxlY3RlZDtcbiAgICAgICAgaW1hZ2UuZ2V0SW1hZ2UoKS50aGVuKGltYWdlc291cmNlID0+IHtcbiAgICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIHNvdXJjZSA9ICBzZWxlY3RlZC5zdWJzdHIoNywgc2VsZWN0ZWQubGVuZ3RoKVxuICAgICAgICAgICAgbGV0IGZvbGRlciA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgICAgIGxldCBwYXRoID0gZnMucGF0aC5qb2luKGZvbGRlci5wYXRoLCB0aGlzLkRMLlJlY2lwZS5OYW1lICsgJy5wbmcnKTtcbiAgICAgICAgICAgIGxldCBzYXZlZCA9IGltYWdlc291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJqcGVnXCIpO1xuICAgICAgICAgICAgaWYoc2F2ZWQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZWQgaW1hZ2UgXCIrcGF0aClcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWQgTk9UIHNhdmUgaW1hZ2Ugb24gaU9TOiBcIitwYXRoKVxuXG4gICAgICAgICAgICBzb3VyY2UgPSBwYXRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaXJlYmFzZS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgcmVtb3RlRnVsbFBhdGg6ICdpbWFnZXMvcmVjaXBlcy8nICsgdGhpcy5ETC5SZWNpcGUuTmFtZSArICcucG5nJyxcbiAgICAgICAgICAgICAgbG9jYWxGdWxsUGF0aDogc291cmNlLFxuICAgICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLkRMLkRBVEFfVXBsb2FkU3RhdHVzID0gc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICh1cGxvYWRlZEZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkRMLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHVwbG9hZGVkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGUpKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VVUkwgPSB1cGxvYWRlZC51cmw7XG4gICAgICAgICAgICAgICAgICB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTCA9IHVwbG9hZGVkLnVybDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdXBsb2FkIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAvLyBwcm9jZXNzIGVycm9yXG4gICAgfSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgRGV0YWlsc1wiO1xuICB9XG59XG4iXX0=