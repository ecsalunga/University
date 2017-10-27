import { Component, OnInit } from '@angular/core';
import { isIOS } from "platform";
import { Core } from "../../core";
import { DataLayer, DataAccess, RecipeInfo } from "../../data";
import * as imagepicker from "nativescript-imagepicker";
import firebase = require("nativescript-plugin-firebase");
import fs = require('file-system')

@Component({
  moduleId: module.id,
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  imageURL: string

  constructor(public core: Core, private DA: DataAccess, private DL: DataLayer) {
    if(this.DL.Recipe == null) {
      this.DL.Recipe = new RecipeInfo(DL.NO_IMAGE_URL);
    }

    if(!this.DL.Recipe.ImageURL)
      this.DL.Recipe.ImageURL = DL.NO_IMAGE_URL;

    this.imageURL = this.DL.Recipe.ImageURL;
  }

  public SelectImage() {
    let context = imagepicker.create({
      mode: "single" // use "multiple" for multiple selection
    });

    context.authorize()
    .then(() => {
        return context.present();
    })
    .then(images => {
      images.forEach(image => {
        let selected = image.fileUri;
        let source = selected;
        image.getImage().then(imagesource => {
          if (isIOS) {
            source =  selected.substr(7, selected.length)
            let folder = fs.knownFolders.documents();
            let path = fs.path.join(folder.path, this.DL.Recipe.Name + '.png');
            let saved = imagesource.saveToFile(path, "jpeg");
            if(saved)
              console.log("saved image "+path)
            else
              console.log("Did NOT save image on iOS: "+path)

            source = path;
          }
          firebase.uploadFile({
              remoteFullPath: 'images/recipes/' + this.DL.Recipe.Name + '.png',
              localFullPath: source,
              onProgress: (status) => {
                  this.DL.DATA_UploadStatus = status.percentageCompleted;
              }
            }).then(
              (uploadedFile) => {
                let uploaded = JSON.parse(JSON.stringify(uploadedFile));
                this.imageURL = uploaded.url;
                this.DL.Recipe.ImageURL = uploaded.url;
              },
              (error) => {
                console.log("File upload error: " + error);
              }
            );
        });
      });
    }).catch((e) => {
        // process error
    });
  }

  public Login() {
    firebase.login({
      type: firebase.LoginType.FACEBOOK
    }).then((result) => {
        console.log(JSON.stringify(result));
      },
      (errorMessage) => {
        console.log("error: " + errorMessage);
      }
    );
  }
  
  ngOnInit() { 
    this.DL.TITLE = "Recipe Details";
  }
}
